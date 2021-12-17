import React from "react";
import tw, { styled } from "twin.macro"
import Slider  from "react-slick";
import "../../../style/slick.css"

import Image from "../../basic/image";



const SSection = styled.section`
    ${ tw`
        mx-auto w-10/12 min-h-[calc(80vh - 40px)]
    ` }

    div.card-slider {
        ${ tw`
            grid grid-cols-3 grid-rows-2        
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

const SliderCard = ({
    data: {
        strapi_component,
        card,
        style,
        settings,
        responsive_settings,
    } 
}) => {

    const slideSettings = {
        className: "card-slider",
        autoplay: settings.auto_play,
        speed: settings.speed,
        arrows: settings.arrows,
        dots: settings.dots,
        fade: settings.fade,
        infinite: settings.infinite,
        pauseOnFocus: settings.pause_on_focus,
        pauseOnHover: settings.pause_on_hover,
        pauseOnDotsHover: settings.pause_on_dots_hover,
        slidesToShow: settings.slide_to_show,
        slideToScroll: settings.slide_to_scroll,
        swipeToSlide: settings.swipe,
        vertical: settings.direction === "vertical" ? true : false,
        verticalSwiping: settings.vertical_swipe,
        centerMode: settings.center_mode,
        centerPadding: settings.center_padding,
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