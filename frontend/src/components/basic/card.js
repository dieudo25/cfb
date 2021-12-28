import React from "react";
import tw, { styled } from "twin.macro";

import Image from "./image";
import RichText from "./richText";

const SCard = styled.div`
    .img-container {
        img {
            ${ tw`
                object-contain
            ` }
        }
    }

    .rich-text {
        p {
            a {
                ${ ({ color }) => color &&
                    `color: ${ color };`  
                }

                ${ tw`
                    no-underline
                ` }

                ${ ({ className }) => (className.includes("footer-card-item")) && tw`
                    md:break-all
                ` }
            }
        }
    }

    &:hover {
        .img-container {
            ${ ({ className, color }) => (className.includes("services-grid") || className.includes("home-section")) && color
                    ? `background-color: ${ color };`
                    :
                    tw`bg-white`    
            }
        }

        .rich-text {
            p {
                ${ ({ className, color }) => (className.includes("services-grid") || className.includes("home-section")) && color &&
                    `color: ${ color };`  
                }
            }
        }
    }   
`

const Card = ({ data: { color, image, text }, className } ) => (
    <SCard className={`card-container ${ className }`} color={ color }>
        <Image 
            image={ image.formats > 0 && image.formats !== null
                ? 
                image.formats.small || image.formats.thumbnail
                :
                image
            }
        />
        <RichText text={ text } />
    </SCard>
)

export default Card;