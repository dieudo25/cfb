import React from "react";
import tw, { styled } from "twin.macro"
import { AnchorLink } from "gatsby-plugin-anchor-links";

import Image from "./image";

const SAnchorLink = styled(AnchorLink)`
    ${ ({ className }) => className.includes('home-section') && tw`
        md:absolute md:left-[calc(50% - calc(40px / 2))]
    ` }

    .anchor-img {
        ${ ({ className }) => className.includes('home-section') && tw`
            md:w-[40px] h-[40px]
        ` }

        img {
            ${ tw `
                md:w-full md:h-full md:object-contain
            ` }
        }
    }

    &.anchor-bottom {
        ${ ({ className }) => className.includes('anchor-home-section') && tw`
            md:bottom-[15vh]
            xl:bottom-[10vh]
        ` }
    }

    &.anchor-top {
        ${ ({ className }) => className.includes('anchor-home-section') && tw`
            md:top-[15vh]
            xl:top-[10vh]
        ` }
    }
`

const Anchor = ({ anchor, className, position }) => (
    <SAnchorLink 
        to={ `#${ anchor.to }` }
        title={ anchor.title }
        className={`anchor anchor-${ position } ${ className }`}
        position={ position }
    >
        <Image
            image={ anchor.image.formats > 0 || anchor.image.formats !== null
                ? 
                anchor.image.formats.small || anchor.image.formats.medium || anchor.image.formats.thumbnail
                :
                anchor.image
            }

            className="anchor-img"
        />
    </SAnchorLink>
)

export default Anchor;