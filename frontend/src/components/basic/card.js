import React from "react";
import tw, { styled } from "twin.macro";

import Image from "./image";

const SCard = styled.div`
    .img-container {
        ${ ({color}) => color 
            ? `background-color: ${ color };`
            :
            tw`bg-black`    
        }
        

        ${ tw`
            mx-auto w-[225px] h-[350px] relative z-20
        ` }
    }

    p {
        ${ tw`
            mx-auto w-[215px] text-center
        ` }
    }

    &:hover {
        p {
            ${ ({color}) => color && `color: ${ color };` }
        }
    }
    
`

const Card = ({ data: { color, image, text } } ) => (
    <SCard className="card-container" color={ color }>
        <Image image={ image.formats.small }/>
        <p>{ text }</p>
    </SCard>
)

export default Card;