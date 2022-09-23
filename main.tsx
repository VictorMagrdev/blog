import blog, { ga, redirects } from "https://deno.land/x/blog/blog.tsx";

blog({
  author: "Dino",
  title: "My Blog",
  description: "The blog description.",
  avatar: "avataaars.svg",
  avatarClass: "rounded-full",
  links: [
    { title: "Email", url: "mailto:victorakiladev@gmail.com" },
    { title: "GitHub", url: "https://github.com/VictorMagrdev" },
    { title: "Linkedin", url: "https://www.linkedin.com/in/victor-gomez-089608250" },
  ],
  lang: "en",
   // localised format based on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
  middlewares: [
    ga("UA-XXXXXXXX-X"),
    redirects({
      "/foo": "/my_post",
      // you can skip leading slashes too
      "bar": "my_post2",
    }),
  ],
});