build_args <- "env HUGO_ENV='production' hugo"
blogdown::hugo_build(args = build_args)
blogdown::serve_site()
blogdown::build_site()

blogdown::stop_server()

env HUGO_ENV="production" hugo
