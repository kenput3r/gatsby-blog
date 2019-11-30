const path = require('path');

exports.createPages = async ({graphql, actions}) => {
  const {createPage} = actions;
  const results = await new Promise((resolve, reject) => {
    graphql(`
    {
      allMarkdownRemark{
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `).then(data => {
      return resolve(data);
    });
  });
  results.data.allMarkdownRemark.edges.forEach(({node}) => {
    createPage({
      path: `/posts${node.frontmatter.slug}`,
      component: path.resolve('./src/components/post_layout.js'),
      context: {
        slug: node.frontmatter.slug
      }
    });
  });
}