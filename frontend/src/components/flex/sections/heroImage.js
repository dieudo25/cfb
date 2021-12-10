import React from "react";

import generateStrapiUrl from '../../../utils/strapi';

const HeroImage = ({ data:
    {strapi_component,
    text,
    image, 
    style}
}) => (
    <section id={style.css_id ? style.css_id : ''} className={`component ${strapi_component} ${style.css_classes}`} >
        <img src={generateStrapiUrl(image.url)} alt={image.alternativeText} />
        <p>{text}</p>
    </section>
)

export default HeroImage;