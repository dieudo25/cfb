import React from "react";
import ReactMarkdown from "react-markdown";

import generateStrapiUrl from '../../../utils/strapi';

const HeroImage = ({ data:
    {strapi_component,
    text,
    image, 
    style: {
        css_id,
        css_classes,
    }}
}) => (
    <section id={css_id ? css_id : ''} className={`component ${strapi_component} ${css_classes}`} >
        <img src={generateStrapiUrl(image.url)} alt={image.alternativeText} />
        <ReactMarkdown>{text}</ReactMarkdown>
    </section>
)

export default HeroImage;