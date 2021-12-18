import React from "react";
import tw, { styled } from "twin.macro"

import Button from "../../basic/button";
import RichText from "../../basic/richText";
import Image from "../../basic/image";

import sm from "../../../utils/tailwindBreakpoints"

const Section = styled.section`
    ${ tw` 
        container mx-auto w-10/12 min-h-[calc(100vh - 80px)] grid grid-rows-2 items-center 
        sm:grid-cols-2 sm:grid-rows-1 sm:gap-8  
        md:grid-cols-3
        xl:w-[1100px]
    ` }

    div.c2a {
        ${ tw`
            row-span-1
            sm:col-start-2 sm:row-start-1 sm:text-right
        `}

        ${ ({ first_element }) => first_element === 'text' 
            ? 
            tw`
                sm:col-start-1 sm:text-left
            ` 
            :  
            tw`
                sm:col-start-2 sm:text-right
                md:col-start-3
            ` 
            
        }

        div.rich-text {
            ${tw`
                mb-10
                sm:mb-10
            `}

            p {
                ${ tw`
                    text-justify
                    sm:text-right
                ` }
            }
        }
    }

    div.img-container {
        ${ tw`
            row-span-1 w-full
            sm:row-start-1
            md:col-span-2
        ` }

        ${ ({ first_element }) => first_element === 'image' 
            ? 
            tw`sm:col-start-1` 
            :  
            tw`sm:col-start-2` 
        }

        img {
            ${ tw`
                w-full h-full object-contain
            ` }
        }
    }
`


const C2AImage = ({ data: { strapi_component, text, button, image, style, first_element } }) => (
    <Section
        id={style ? style.css_id : ''}
        className={`component ${strapi_component} ${style ? style.css_classes : ''}`}
        first_element={ first_element }
    >   
        <div className="c2a">
            <RichText text={ text }/>
            <Button button={ button }/>
        </div>
        <Image
            dataSal="slide-right"
            dataSalDuration="800"
            image={ image.formats.small }
        />

    </Section>
)

export default C2AImage;