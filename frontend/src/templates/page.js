import React from 'react'

import Page from "../components/page"
import Seo from "../components/seo"

const PageTemplate = ({pageContext: { id, title, slug, content }}) => (
    <React.StrictMode>  
        <Seo title={ title } />  
        <Page
            id={ id }
            slug={ slug }
            title={ title }
            content={ content }
        />
    </React.StrictMode>
)

export default PageTemplate;