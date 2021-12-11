import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'
import styled from "styled-components"

import generateStrapiUrl from '../../../utils/strapi';

const SSection = styled.section`
    display: grid;
    width: 100vw;
    height: calc(100vh - 80px);

    img.hero-img {
        grid-column: 1;
        grid-row: 1;
        width: inherit;
        height: inherit;
        object-fit: cover;
    }

    div.hero-text {
        grid-column: 1;
        grid-row: 1;
        margin: 30vh;
        text-align: center;

        h1 {
            margin-bottom: 100px;
        }
    }
`

const HeroImage = ({ data : { strapi_component, text, image, style }}) => (
    <SSection 
        id={style ? style.css_id : ''}
        className={`component ${strapi_component} ${style ? style.css_classes : ''}`}
    >
        <img
            className="hero-img"
            src={generateStrapiUrl(image.url)}
            alt={image.alternativeText}
        />
        <div 
            className="hero-text"
            data-sal="slide-down"
            data-sal-duration="800"
        >
            <ReactMarkdown children={text} remarkPlugins={[remarkGfm]} />
        </div>
    </SSection>
)

export default HeroImage;