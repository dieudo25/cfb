import React from 'react';
import Layout from './layout';

const Page = ({ id, slug, title, full_width }) => (
    <Layout>
      {console.log('full_width', full_width)}
        <h2>{ title }</h2>
        <p>{ id }</p>
        <p>{ slug }</p>
        {full_width.map((component) => 
          ((() => {
            console.log('component_name', component.strapi_component);
            switch(component.strapi_component) {
              case 'page.hero-image':
                return <p>{component.text}</p>
              default:
                return <h2>default case - component not found</h2>
            }
          })())
        )}
    </Layout>
);

export default Page;