My first site made using Gatsby.js.

I liked it because it's a static-site generator so no serverside JS nonsense. Easy to use overall and has a decent community. SEO was a real pain though, and react-helmet is not super user friendly. There's no abstraction between body and head content in what you return from the page function. Maybe it's just my ignorance, but it seems like you'd want an SEO component to handle all that.

This site pulls data about my resume and past projects from two separate JSON files. Typography and design are extremely simple and meet web standards for accessibility (as best I could over a weekend).

Still lots to learn but I think this is a decent first go.

To get this going clone the repo, `cd` into the project and `npm install`.

```
gatsby develop // This will spin up a hot reloading dev server at localhost:8000

gatsby built // This will build your static site

gatsby serve // This will start a static server to view that build at localhost:9000

npm run deploy // This will build and deploy to Github using gh-pages plugin (https://www.gatsbyjs.org/docs/how-gatsby-works-with-github-pages/)
```