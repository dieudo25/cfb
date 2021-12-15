import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'
import tw, { styled } from "twin.macro"

import generateStrapiUrl from '../../../utils/strapi';

const SSection = styled.section`
    ${ tw`
        w-screen h-screen grid mx-auto my-0 grid-rows-1 grid-cols-1
    ` }

    img.hero-img {
        ${ tw `
            row-start-1 col-start-1 w-screen h-screen object-cover
        ` }
    }

    div.hero-text {
        ${ tw`
            row-start-1 col-start-1 mx-[10%] mt-[20vh] text-center
        ` }

        h1 {
            ${ tw`
                mb-20
            ` }
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