import React from "react";
import tw, { styled } from "twin.macro"

import RichText from "../../basic/richText";

const SSection = styled.section`
    ${ tw`
        w-10/12 mx-auto mt-[100px] mb-[50px]
    ` }
   
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