# HannesBräu website - deploy branch

## general

When pushing commits to the deploy branch, the _deploy_ will be automatically produced and published by [netlify](https://app.netlify.com/sites/hannesbru/deploys?filter=deploy). In a post-processing step, netlify will [inject a html snippet](https://app.netlify.com/sites/hannesbru/settings/deploys#post-processing) before </body> which includes color changes to the navbar in chrome, addition of google analytics and a popup to inform the visitor that the site uses cookies.

## how to

1. When you are done making changes on the main branch..
   +  blogdown::stop_server()
   +  eventually delete 'public' folder
   +  blogdown::build_site()
2. commit changes to main & deploy branch
3. push to main & deploy branch 