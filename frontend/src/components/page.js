import React from 'react';
import Layout from './layout';
import DynamicZone from './flex/dynamicZone';

const Page = ({ id, slug, title, full_width }) => (
    <Layout>
      {console.log('full_width', full_width)}
        <h2>{ title }</h2>
        <p>{ id }</p>
        <p>{ slug }</p>
        <DynamicZone sections={full_width}/>
    </Layout>
);

export default Page;