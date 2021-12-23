import React from "react";
import tw, { styled } from "twin.macro"

import RichText from "../../basic/richText";
import Image from "../../basic/image";

const SSection = styled.section`
    ${ tw`
        grid w-10/12 mx-auto my-[100px] gap-5 mb-0  
    `}

    div.img-container.image-1 {

        ${ tw`
        ` }

        ${ ({ className }) => className.includes('about-cfb') && tw`
            md:object-cover
        ` }

        img {
            ${ tw`

            ` }

            ${ ({ className }) => className.includes('about-cfb') && tw`
                object-contain w-full
            ` }
        }

    }

    div.img-container.image-2 {

        ${ tw`
            
        ` }

        ${ ({ className }) => className.includes('about-cfb') && tw`
            w-[100px] mx-auto
            
        ` }

        img {
            ${ tw`

            ` }

            ${ ({ className }) => className.includes('about-cfb') && tw`
                object-contain w-full 
            ` }
        }

    }


    
`

const RichText2Image = ({ 
    data: 
        { 
            strapi_component, 
            text, 
            image_1, 
            image_2, 
            first_element, 
            second_element, 
            style, 
            animation_image_1, 
            animation_image_2 
        } 
}) => (
    
    <SSection
        id={ style && style.css_id }
        className={ `component ${strapi_component} ${style && style.css_classes }` }
        first_element= { first_element }
        second_element= { second_element }
    >
<<<<<<< HEAD
        {console.log("firselement:" , second_element    )}
        {console.log("secondelemen:", first_element)}
=======
>>>>>>> d5de70379611881aabe859c8a1d27984ea36aad7
        <RichText text={ text }/>
        <Image 
            image={image_1}
            dataSal={ animation_image_1 && animation_image_1.type.replace('_', '-') }
            dataSalDuration="800"
            className = 'image-1'
        />
        <Image 
            image={image_2}
            dataSal={ animation_image_2 && animation_image_2.type.replace('_', '-') }
            dataSalDuration="800"
            className= 'image-2'
        />

        
    </SSection>
)

export default RichText2Image;