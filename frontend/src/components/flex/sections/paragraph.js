import React from "react";
import tw, { styled } from "twin.macro"

import RichText from "../../basic/richText";

const SSection = styled.section`
    ${ tw`
        mx-auto w-10/12
    ` }

    .rich-text {
        h2 {
            ${ ({ className }) => className.includes('p-services') && tw`
                mt-0 mx-auto text-left
            ` }

            ${ ({ color }) => color && `
                color: ${ color.normal };
            ` }
        }
    }
   
`

const Paragraph = ({ data: { strapi_component, text, color, style } }) => (
    <SSection
        id={ style && style.css_id }
        className={ `component ${strapi_component} ${style && style.css_classes }` }
        color={ color }
    >
        {console.log(color)}
        <RichText text={ text } />
    </SSection>
)

export default Paragraph;