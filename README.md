# HannesBräu website

deploy status: [![Netlify Status](https://api.netlify.com/api/v1/badges/266076e6-11e5-4899-ae58-5d6d3f7eabac/deploy-status)](https://app.netlify.com/sites/hannesbru/deploys)

## development

* `blogdown::serve_site()` to run a demo version in the viewer pane in rstudio or your browser
* To [allow indexing by search engines](blog.brianbeach.com/posts/2019-12-11-hugo-robots-meta-tag/) use `env HUGO_ENV="production" hugo`

## modify

* `~/static/css/main.css`

## custom functions

can be found under '\themes\gohugo-theme-ananke\layouts\shortcuts\'

* agenda
  + contains an iframe to show a google calendar at 'Termine'
* beer_navi
  + Shows the navigtion 'Biere' and 'Produkte' on the landing page
* form-contact
  + contains the code for the email-contact form

## how to markdown

* Zeilenumbrüche: zwei leerzeichen am Ende der Zeile