import React from "react";

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
        <p>{text}</p>
    </section>
)

export default HeroImage;