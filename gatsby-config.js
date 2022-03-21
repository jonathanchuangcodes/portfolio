const urljoin = require("url-join")

module.exports = {
  flags: {
    PARALLEL_QUERY_RUNNING: true,
  },
  siteMetadata: {
    title: "Jonathan Chuang",
    author: "Jonathan Chuang",
    description: "Hi there, My name is Jonathan, welcome to my portfolio",
    siteUrl: urljoin("https://www.jonathanchuang.codes", "/"),
    social: {
      linkedin: "https://www.linkedin.com/in/jonathanychuang",
      dribbble: "https://dribbble.com/jchuang02",
      github: "https://github.com/jchuang02/",
    },
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        // Defaults used for gatsbyImageData and StaticImage
        defaults: {},
        // Set to false to allow builds to continue on image errors
        failOnError: true,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          blog: require.resolve("./src/templates/blog-post.js"),
          default: require.resolve("./src/templates/blog-post.js"),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
              linkImagesToOriginal: false,
            },
          },
          `gatsby-remark-slug`,
        ],
      },
    },
    {
      resolve: "gatsby-plugin-mdx-frontmatter",
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
  ],
}
