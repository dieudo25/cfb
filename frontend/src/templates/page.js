import React from 'react'

import Page from "../components/page"
import Seo from "../components/seo"

export default (props) => {
    console.log("Templates/Pages.render props", props)
    var id = props.pageContext.id;
    var title = props.pageContext.title;
    var slug = props.pageContext.slug;
    var title = props.pageContext.title;
    var full_width = props.pageContext.full_width;
    return (
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
}