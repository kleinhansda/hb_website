// Netlify-Funktion: liest den öffentlichen Google-Kalender von HannesBräu und
// liefert die nächsten Termine als JSON. Besucher sprechen dadurch nie direkt
// mit Google (DSGVO), und die Website zeigt die Termine im eigenen Design.
//
// Aufruf: /.netlify/functions/termine
// Pflege: Termine wie bisher im Google-Kalender eintragen. Hier ist nichts zu tun.

import ICAL from "ical.js";

const KALENDER_ID = "hannesbräu.de_fcn3gg6i3i0n1bom0jvodkk5r0@group.calendar.google.com";
const ICS_URL = `https://calendar.google.com/calendar/ical/${encodeURIComponent(KALENDER_ID)}/public/basic.ics`;

const TAGE_VORAUS = 180; // so weit in die Zukunft werden Termine gezeigt
const MAX_TERMINE = 12;
const MAX_WIEDERHOLUNGEN = 500; // Schutz gegen endlose Serien

// Ganztägige Termine zählen ab Mitternacht deutscher Zeit
const sortSchluessel = (t) => (t.ganztag ? new Date(t.beginn + "T00:00:00+01:00") : new Date(t.beginn)).getTime();

export function termineAusIcs(icsText, jetzt = new Date()) {
  const komp = new ICAL.Component(ICAL.parse(icsText));

  // Zeitzonen aus dem Feed registrieren, damit Uhrzeiten stimmen
  for (const tz of komp.getAllSubcomponents("vtimezone")) {
    ICAL.TimezoneService.register(new ICAL.Timezone(tz));
  }

  const von = new Date(jetzt.getTime() - 6 * 3600 * 1000); // laufende Termine des Tages noch zeigen
  const bis = new Date(jetzt.getTime() + TAGE_VORAUS * 24 * 3600 * 1000);

  const vevents = komp.getAllSubcomponents("vevent");
  const serien = new Map();
  const ausnahmen = [];
  for (const ve of vevents) {
    const ev = new ICAL.Event(ve);
    if (ev.isRecurrenceException()) ausnahmen.push(ev);
    else serien.set(ev.uid, ev);
  }
  for (const ex of ausnahmen) {
    const basis = serien.get(ex.uid);
    if (basis) basis.relateException(ex);
    else serien.set(ex.uid + ex.recurrenceId.toString(), ex);
  }

  const termine = [];
  const eintrag = (ev, start, ende) => {
    const status = (ev.component.getFirstPropertyValue("status") || "").toUpperCase();
    if (status === "CANCELLED") return;
    const s = start.toJSDate();
    const e = (ende || start).toJSDate();
    if (e < von || s > bis) return;
    termine.push({
      titel: ev.summary || "Termin",
      // Ganztägige Termine als reines Datum (JJJJ-MM-TT), sonst Zeitpunkt in UTC
      beginn: start.isDate ? start.toString() : s.toISOString(),
      ende: start.isDate ? (ende || start).toString() : e.toISOString(),
      ganztag: start.isDate,
      ort: ev.location || "",
      beschreibung: (ev.description || "").trim(),
    });
  };

  for (const ev of serien.values()) {
    if (ev.isRecurring()) {
      const it = ev.iterator();
      let n = 0;
      let next;
      while ((next = it.next()) && n++ < MAX_WIEDERHOLUNGEN) {
        if (next.toJSDate() > bis) break;
        const d = ev.getOccurrenceDetails(next);
        eintrag(d.item, d.startDate, d.endDate);
      }
    } else {
      eintrag(ev, ev.startDate, ev.endDate);
    }
  }

  termine.sort((a, b) => sortSchluessel(a) - sortSchluessel(b));
  return termine.slice(0, MAX_TERMINE);
}

export default async () => {
  try {
    const antwort = await fetch(ICS_URL, { headers: { "User-Agent": "hannesbru.de Terminliste" } });
    if (!antwort.ok) throw new Error(`Google-Kalender antwortet mit ${antwort.status}`);
    const termine = termineAusIcs(await antwort.text());
    return new Response(JSON.stringify({ termine, stand: new Date().toISOString() }), {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Cache-Control": "public, max-age=300",
        "Netlify-CDN-Cache-Control": "public, s-maxage=600, stale-while-revalidate=3600",
      },
    });
  } catch (fehler) {
    return new Response(JSON.stringify({ fehler: String(fehler.message || fehler) }), {
      status: 502,
      headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" },
    });
  }
};
