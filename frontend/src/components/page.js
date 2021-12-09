import React from 'react';
import Layout from './layout';

const Page = ({ id, slug, title, full_width }) => (
    <Layout>
        <h2>{ title }</h2>
        <p>{ id }</p>
        <p>{ slug }</p>
        {full_width.forEach(field => {
          <p>{field.id}</p>  
        })}
    </Layout>
);

export default Page;