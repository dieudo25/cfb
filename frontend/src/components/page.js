import React from 'react';
import Layout from './layout/layout';
import DynamicZone from './flex/dynamicZone';

const Page = ({ content }) => (
    <Layout>
        <DynamicZone sections={content}/>
    </Layout>
);

export default Page;