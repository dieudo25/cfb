exports.createPages = async ({ actions: { createPage }, graphql }) => {
   await graphql(`
    {
      allStrapiPages {
        nodes {
          id
          slug
          title
          content            
        }
      }
    }
  `).then(result => {
    const allPages = result.data.allStrapiPages.nodes
    allPages.forEach(({ id, slug, title, content }) => {
      createPage({
        path: slug == 'accueil' ? '/' : `/${slug}`,
        component: require.resolve("./src/templates/page"),
        context: {
          id,
          slug,
          title,
          content,
        }
      })    
    });
  })
}