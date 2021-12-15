import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";
import tw, { styled } from "twin.macro"
import Button from "../../basic/button";

import generateStrapiUrl from "../../../utils/strapi";

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

        ${ props => props.first_element === 'text' 
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

        div.c2a-text {
            ${tw`
                mb-10
                sm:mb-10
            `}
        }
    }

    div.img-container {
        ${ tw`
            row-span-1 w-full
            sm:row-start-1
            md:col-span-2
        ` }

        ${ props => props.first_element === 'image' 
            ? 
            tw`sm:col-start-1` 
            :  
            tw`sm:col-start-2` 
        }

        img.c2a-img {
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
        first_element={first_element}
    >   
        <div 
            className="c2a" 
        >
            <div className="c2a-text">
                <ReactMarkdown children={text} remarkPlugins={[remarkGfm]} />
            </div>
            <Button button={button}/>
        </div>
        <div 
            className="img-container"
            data-sal="slide-right"
            data-sal-duration="800"
        >
            <img
                className="c2a-img"
                src={generateStrapiUrl(image.url)}
                alt={image.alternativeText}
            />
        </div>
    </Section>
)

export default C2AImage;