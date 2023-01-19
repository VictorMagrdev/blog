import blog, { ga, redirects } from "https://deno.land/x/blog@0.5.0/blog.tsx";

blog({
  author: "Victor",
  title: "My Blog",
  description: "Hi this is my blog, here i publish the things than i will be learn and study about development.",
  avatar: "avataaars.svg",
  avatarClass: "rounded-full",
  links: [
    { title: "Email", url: "mailto:victorakiladev@gmail.com" },
    { title: "GitHub", url: "https://github.com/VictorMagrdev" },
    { title: "Linkedin", url: "https://www.linkedin.com/in/victor-gomez-089608250" },
  ],
  lang: "en",
  favicon: "favicon.ico",
  ogImage: {
    url: "avataars.svg",
    twitterCard:  "summary_large_image" 
  },
  middlewares: [
    ga("UA-XXXXXXXX-X"),
    redirects({
      "/foo": "/my_post",
      "bar": "my_post2",
    }),
  ],
});