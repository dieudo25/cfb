import React from "react";
import tw, { styled } from "twin.macro"

import Button from "../../basic/button";
import RichText from "../../basic/richText";
import Image from "../../basic/image";

const SSection = styled.section`
    ${ tw` 
        mx-auto w-10/12  grid grid-rows-2 items-center 
        sm:grid-cols-2 sm:grid-rows-1 sm:gap-8  
        md:grid-cols-3
        xl:w-[1100px]
    ` }

    div.c2a {
        ${ tw`
            row-span-1
            sm:col-start-2 sm:row-start-1 sm:text-right
        `}

        ${ ({ first_element }) => first_element === 'text' 
            ? 
            tw`
                sm:col-start-1 sm:text-left
            ` 
            :  
            tw`
                sm:col-start-2 sm:text-right
                md:col-start-3
            ` 
            
        }

        div.rich-text {
            ${tw`
                mb-10
                sm:mb-10
            `}

            p {
                ${ tw`
                    text-justify
                ` }

                ${ ({ first_element }) => first_element === 'text' 
                    ? 
                    tw`
                        sm:text-left
                    ` 
                    :  
                    tw`
                        sm:text-right
                    ` 
                }
            }
        }
    }

    div.img-container {
        ${ tw`
            row-span-1 w-full
            sm:row-start-1
            md:col-span-2 
            lg:h-[455px]
        ` }

        ${ ({ first_element }) => first_element === 'image' 
            ? 
            tw`sm:col-start-1` 
            :  
            tw`sm:col-start-2` 
        }

        

        img {
            ${ tw`
                w-full h-full object-contain
            ` }

            ${ ({ className }) => className.includes('home-section') && tw`
                md:object-cover
            ` }
            
            ${ ({ className }) => className.includes('life-project') && tw`
                w-[250px] h-full
            ` }
        }
    }
`

const C2AImage = ({ data: { strapi_component, text, button, image, style, first_element, animation } }) => (
    <SSection
        id={ style && style.css_id }
        className={ `component ${strapi_component} ${style && style.css_classes }` }
        first_element={ first_element }
    >   
        <div className="c2a">
            <RichText text={ text }/>
            { button && <Button button={ button }/> }
        </div>
        <Image
            dataSal={ animation && animation.type.replace('_', '-') }
            dataSalDuration="800"
            image={ image.formats.medium || image.formats.thumbnail }
        />

    </SSection>
)

export default C2AImage;