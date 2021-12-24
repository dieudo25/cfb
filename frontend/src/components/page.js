import React from 'react';
import Layout from './layout/layout';
import DynamicZone from './flex/dynamicZone';

const Page = ({ slug, content }) => (
    <Layout slug={ slug }>
        <DynamicZone sections={ content }/>
    </Layout>
);

export default Page;