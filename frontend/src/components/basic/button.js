import React from "react";
import tw, { styled } from "twin.macro"
import { Link } from "gatsby"

const SButton = styled(Link)`
    ${ tw`
        bg-[#FF661B] text-white font-bold py-3 px-8 no-underline transition ease-in-out duration-500
        hover:bg-[#DC4304] hover:transition ease-in-out
    `}
`

const Button = ({ button: { text, color } }) => (
    <SButton
        to={'/'} 
        className="c2a-btn"
    >
        {text}
    </SButton>
)
export default Button;
