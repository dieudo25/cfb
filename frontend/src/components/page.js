import React from 'react';
import Layout from './layout/layout';
import DynamicZone from './flex/dynamicZone';

const Page = ({ full_width }) => (
    <Layout>
        <DynamicZone sections={full_width}/>
    </Layout>
);

export default Page;