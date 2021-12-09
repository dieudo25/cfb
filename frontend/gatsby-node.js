exports.createPages = async ({ actions: { createPage }, graphql }) => {

  graphql(`
    {
      allStrapiPages {
        nodes {
          id
          slug
          title
          full_width            
        }
      }
    }
  `).then(result => {
    const allPages = result.data.allStrapiPages.nodes
    allPages.forEach(({ id, slug, title, full_width }) => {
      createPage({
        path: slug == 'accueil' ? '/' : `/${slug}`,
        component: require.resolve("./src/templates/page"),
        context: {
          id,
          slug,
          title,
          full_width,
        }
      })    
    });
  })
}
