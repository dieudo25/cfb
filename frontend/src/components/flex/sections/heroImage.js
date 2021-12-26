import React from "react";
import tw, { styled } from "twin.macro"

import Image from "../../basic/image";
import RichText from "../../basic/richText";
import Anchor from "../../basic/anchor";

const SSection = styled.section`
    ${ tw`
        w-screen h-screen grid mx-auto my-0 grid-rows-1 grid-cols-1
    ` }

    div.img-container.hero-image {
        ${ tw`
            w-screen h-screen
        ` }

        img {
            ${ tw `
                w-full h-full object-cover
                xsm:object-[34% 0%]
                sm:object-center
            ` }
        }
    }

    div.rich-text {
        ${ tw`
            row-end-2 col-start-1 mt-[15vh] w-screen h-screen text-center
            md:mt-[20vh]
        ` }

        * {
            ${ tw`
                mx-[10%]
            ` }
        }

        h1 {
            ${ tw`
                mb-8
                md:mb-20
            ` }
        }
    }

`

const HeroImage = ({ data: { strapi_component, text, image, style, animation, anchor_down } }) => (
    <SSection 
        id={ style && style.css_id }
        className={ `component ${strapi_component} ${style && style.css_classes }` }
    >
        <Image image={ image } className="hero-image"/>
        <RichText 
            dataSal={ animation && animation.type.replaceAll('_', '-') }
            dataSalDuration="800"
            text={ text }
        />

        { anchor_down && 
            <Anchor 
                anchor={ anchor_down } 
                position="bottom" 
                className="anchor-home-section" 
            /> 
        }

    </SSection>
)

export default HeroImage;