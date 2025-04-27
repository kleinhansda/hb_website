build_args <- "env HUGO_ENV='production' hugo"
blogdown::hugo_build(args = build_args)
blogdown::serve_site()
blogdown::build_site()

blogdown::stop_server()

blogdown::new_post("Events - Mai", tags = c("ausschank", "event"), subdir = "artikel")

env HUGO_ENV="production" hugo
