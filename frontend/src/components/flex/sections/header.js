import React from "react";
import tw, { styled } from "twin.macro"

import Image from "../../basic/image";
import capitalizeFirstChar from "../../../utils/string";

const SSection = styled.section`
    ${ tw`
        relative h-[400px]
        sm:h-[300px]
        md:h-[400px]

    ` }

    .img-container {
        ${ tw`
            h-full bg-dark-500
        ` } 

        img {
            ${ tw`
                object-cover object-center opacity-60 
            ` }
            
            ${ ({ className }) => (className.includes("header-services") && tw`
                sm:object-[0% 22%]
            `) }

            ${ ({ className }) => (className.includes("header-service-life-project") && tw`
                sm:object-[0% 26%]
            `) }

            ${ ({ className }) => (className.includes("header-service-every-day-life") && tw`
                sm:object-[0% 37%]
            `) }

        }
    }

    .header-text {
        ${ tw`
            absolute top-[calc(50% - calc(40px / 2))] w-full
        ` }

        h1 {
            ${tw`
                max-w-[960px] m-auto text-white text-center
                md:w-10/12 md:text-left
            ` }
        }
    }
`

const Header = ({ data: { strapi_component, text, image, style } }) => (
    <SSection
        id={ style && style.css_id }
        className={ `component ${strapi_component} ${style && style.css_classes }` }
    >
        <Image image={ image } />
        <div className="header-text">
            <h1>{ capitalizeFirstChar(text) }</h1>
        </div>
    </SSection>
)

export default Header;