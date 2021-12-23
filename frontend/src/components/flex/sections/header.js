import React from "react";
import tw, { styled } from "twin.macro"

import Image from "../../basic/image";

const SSection = styled.section`
    ${ tw`
        relative h-[400px]   
    ` }

    .img-container {
        ${ tw`
            h-[400px] bg-dark-500
        ` } 

        img {
            ${ tw`
                object-cover opacity-60
            ` }
            ${ ({ className }) => (className.includes("header-services") && tw`
                object-center
                sm:object-[0% 26%]
            `) }
        }
    }

    .header-text {
        ${ tw`
            absolute top-[calc(50% - calc(40px / 2))] w-full
        ` }

        h1 {
            ${tw`
                w-10/12 m-auto text-white text-center
                md:text-left
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
            <h1>{ text }</h1>
        </div>
    </SSection>
)

export default Header;