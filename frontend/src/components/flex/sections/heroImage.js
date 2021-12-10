import React from "react";
import ReactMarkdown from "react-markdown";

import generateStrapiUrl from '../../../utils/strapi';

const sectionStyle = {
    width: "100vw",
    height: "100vh",
}

const ImgStyle = {
    width: "100%",
    height: "100%",
}

const HeroImage = ({ data:
    {strapi_component,
    text,
    image, 
    style: {
        css_id,
        css_classes,
    }}
}) => (
    <section 
        id={css_id ? css_id : ''}
        className={`component ${strapi_component} ${css_classes}`}
        style={{sectionStyle}}
    >
        <img 
            src={generateStrapiUrl(image.url)}
            alt={image.alternativeText}
        />
        <ReactMarkdown>{text}</ReactMarkdown>
    </section>
)

export default HeroImage;