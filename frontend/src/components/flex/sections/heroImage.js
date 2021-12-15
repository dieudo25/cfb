import React from "react";
import tw, { styled } from "twin.macro"

import generateStrapiUrl from '../../../utils/strapi';

import RichText from "../../basic/richText";

const SSection = styled.section`
    ${ tw`
        w-screen h-screen grid mx-auto my-0 grid-rows-1 grid-cols-1
    ` }

    img.hero-img {
        ${ tw `
            row-start-1 col-start-1 w-screen h-screen object-cover
        ` }
    }

    div.rich-text {
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

const HeroImage = ({ data: { strapi_component, text, image, style }}) => (
    <SSection 
        id={style ? style.css_id : ''}
        className={`component ${strapi_component} ${style ? style.css_classes : ''}`}
    >
        <img
            className="hero-img"
            src={generateStrapiUrl(image.url)}
            alt={image.alternativeText}
        />

        <RichText 
            dataSal="slide-down"
            dataSalDuration="800"
            text={ text }
        />
    </SSection>
)

export default HeroImage;