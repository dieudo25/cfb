import React from "react";
import tw, { styled } from "twin.macro";

import Image from "./image";
import RichText from "./richText";

const SCard = styled.div`
    .img-container {
        ${ ({color}) => color 
            ? `background-color: ${ color };`
            :
            tw`bg-white`    
        }
    }

    &:hover {
        p {
            ${ ({color}) => color && `color: ${ color };` }
        }
    }
    
`

const Card = ({ data: { color, image, text } } ) => (
    <SCard className="card-container" color={ color }>
        <Image 
            image={ image.formats
                ? 
                image.formats.small || image.formats.thumbnail
                :
                image
            }/>
        <RichText text={ text } />
    </SCard>
)

export default Card;