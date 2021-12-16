import React from "react";
import tw, { styled } from "twin.macro"
import Slider  from "react-slick";

import Image from "../../basic/image";



const SSection1 = styled.section`
    ${ tw`
        mx-auto w-10/12 min-h-[calc(80vh - 40px)]
    ` }

    div.card-slider {
        ${ tw`
        
        ` }

        .card-container {
            ${ tw`
                w-[225px]
            ` } 

            .img-container {
                ${ tw`
                    mx-auto w-[225px] h-[350px]
                ` }

                img {
                    ${ tw`
                        w-full h-full object-cover
                    ` }
                }
            }

            p {
                ${ tw`
                    mx-auto w-[215px] text-center
                ` }
            }
        }
    }

`

const SSection = styled.section`
    ${ tw`
        mx-auto w-10/12 min-h-[calc(80vh - 40px)]
    ` }

    .card-slider {

        .card-container {
            ${ tw`
                w-[225px]
            ` }

            .img-container {
                ${ tw`
                    mx-auto w-[225px] h-[350px]
                ` }

                img {
                    ${ tw`
                        w-full h-full object-cover
                    ` }
                }
            }
        }
    }

    

`


const SliderCard = ({
    data: {
        strapi_component,
        card,
        style,
        settings,
        responsive_settings
    } 
}) => {

    const slideSettings = {
        className: "card-slider",
        autoplay: false,
        speed: settings.speed,
        arrows: settings.arrows,
        dots: settings.dots,
        fade: settings.fade,
        infinite: false,
        pauseOnFocus: settings.pause_on_focus,
        pauseOnHover: settings.pause_on_hover,
        pauseOnDotsHover: settings.pause_on_dots_hover,
        slidesToShow: 3,
        slideToScroll: settings.slide_to_scroll,
        swipeToSlide: settings.swipe,
        vertical: settings.direction === "vertical" ? true : false,
        verticalSwiping: settings.vertical_swipe,
        centerMode: settings.center_mode,
        centerPadding: settings.center_padding
    }

    return (
        <SSection
            id={style ? style.css_id : ''}
            className={`component ${strapi_component} ${style ? style.css_classes : ''}`}
        >
            <Slider { ...slideSettings }>
                {card.map((slide) => (
                    <div key={`slide-${slide.id}`} className="card-container">
                        <Image image={ slide.image.formats.small }/>
                        <p>{ slide.text }</p>
                    </div>
                ))}
            </Slider>
        </SSection>
    )
}

export default SliderCard;