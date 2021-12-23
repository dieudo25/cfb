import React from 'react';
import Layout from './layout/layout';
import DynamicZone from './flex/dynamicZone';

const Page = ({ slug, content, color }) => (
    <Layout slug={ slug }>
        <DynamicZone sections={ content } color={ color }/>
    </Layout>
);

export default Page;