import React from "react";
import tw, { styled } from "twin.macro"
import { Link } from "gatsby"

const SButton = styled(Link)`
    ${ tw`
        inline-grid text-white text-center font-bold p-5 no-underline transition ease-in-out duration-500
        sm:py-3 sm:px-8
        hover:transition ease-in-out
    `}

    ${ ({ color, color_hover }) => color
        ?
        `
            background-color: ${ color };
            &:hover {
                background-color: ${ color_hover };
            }
        `
        :
        tw`bg-black hover:bg-gray-400`
    }
`

const Button = ({ button: { text, color, color_hover, page }, dataSal, dataSalDuration}) => (
    <div 
        className="btn-container"
        data-sal={dataSal}
        data-sal-duration={dataSalDuration}
    >
        {<SButton
            to={page && page.slug !== 'accueil' ? `/${page.slug}` : '/' } 
            className="btn"
            color={ color }
            color_hover={ color_hover }
        >
            {text}
        </SButton>}
    </div>
)
export default Button;
