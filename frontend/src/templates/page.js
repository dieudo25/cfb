import React from 'react'

import Page from "../components/page"
import Seo from "../components/seo"

const PageTemplate = ({pageContext: { id, title, slug, content }}) => (
    <>  
        <Seo title="Accueil" />   
        <Page
            id={ id }
            slug={ slug }
            title={ title }
            content={ content }
        />
    </>
)

export default PageTemplate;