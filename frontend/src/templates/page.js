import React from 'react'

import Page from "../components/page"
import Seo from "../components/seo"

const PageTemplate = ({pageContext: { id, title, slug, full_width }}) => (
    <>  
        <Seo title="Accueil" />   
        <Page
            id={ id }
            slug={ slug }
            title={ title }
            full_width={ full_width }
        />
    </>
)

export default PageTemplate;