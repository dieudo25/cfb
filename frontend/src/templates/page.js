import React from 'react'
import Page from "../components/page"

export default (props) => {
    console.log("Templates/Pages.render props", props)
    return (
        <Page
            id={ props.pageContext.id }
            slug={ props.pageContext.slug }
            title={ props.pageContext.title }
            full_width={ props.pageContext.full_width }
        />
    )
}