import React from "react";
import tw, { styled } from "twin.macro"

import RichText from "../../basic/richText";

const SSection = styled.section`
   
`

const Paragraph = ({ data: { strapi_component, text, style } }) => (
    <SSection
        id={ style && style.css_id }
        className={ `component ${strapi_component} ${style && style.css_classes }` }
    >
        <RichText text={ text } />
    </SSection>
)

export default Paragraph;