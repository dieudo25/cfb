import React from "react";
import tw, { styled } from "twin.macro"

import RichText from "../../basic/richText";

const SSection = styled.section`
    ${ tw`
        w-10/12 mx-auto
    ` }

    .rich-text {
        h1 {
            ${ ({ className }) => className.includes('p-services') && tw`
                my-0 mx-auto max-w-[900px] text-left
            ` }
        }
    }
   
`

const Paragraph = ({ data: { strapi_component, text, style }, color }) => (
    <SSection
        id={ style && style.css_id }
        className={ `component ${strapi_component} ${style && style.css_classes }` }
        color={ color }
    >
        <RichText text={ text } />
    </SSection>
)

export default Paragraph;