import React from "react";
import tw, { styled } from "twin.macro"

import RichText from "../../basic/richText";
import Button from "../../basic/button";

const SSection = styled.section`
    ${ tw`
        container mx-auto w-10/12 max-h-[calc(20vh-40px)] grid grid-cols-1 grid-rows-2 items-center
        sm:grid-rows-1 sm:grid-cols-2 sm:gap-5
        md:w-[700px]
        xl:w-[900px] m-auto xl:grid-cols-3
    ` }

    div.rich-text {
        ${ tw`
            xl:col-span-2
        ` }

        ${ ({ first_element }) => first_element === 'text'
            ?
            tw`
                sm:col-start-1 sm:row-start-1 
            `
            :
            tw`
                sm:col-start-2 sm:row-start-1
            `
        }

        p {
            ${ tw`
                text-justify
            ` }
        }

    }
    div.btn-container {
        ${ tw`
            mx-auto
            sm:mr-0
        ` }

        ${ ({ first_element }) => first_element === 'button'
            ?
            tw`
                sm:col-start-1 sm:row-start-1 
            `
            :
            tw`
                sm:col-start-2 sm:row-start-1
                xl:col-start-3
            `
        }

        a.btn {
            ${ tw`
                
            ` }
        }   
    }
`

const RichTextButton = ({ data: {strapi_component, text, button, first_element, style } }) => (
    <SSection
        id={style ? style.css_id : ''}
        className={`component ${strapi_component} ${style ? style.css_classes : ''}`}
        first_element={ first_element }
    >
        <RichText 
            dataSal={first_element === "text" ? "slide-right" : "slide-left"}
            dataSalDuration="800"
            text={ text }
        />
        <Button 
            button={ button }
            dataSal={first_element === "button" ? "slide-right" : "slide-left"}
            dataSalDuration="800"
        />
    </SSection>
)

export default RichTextButton;