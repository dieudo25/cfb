import React from "react";
import tw, { styled } from "twin.macro"
import Slider  from "react-slick";

import Image from "../../basic/image";



const SSection = styled.section`
    ${ tw`
        w-[80vh]
    ` }

    div.card-slider {
        ${ tw`

        ` }

        .card-container {
            ${ tw`
                m-auto
            ` } 

            .img-container {
                ${ tw`
                    w-[225px] h-[350px]
                ` }

                img {
                    ${ tw`
                        w-full h-full
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
        centerPadding: settings.center_padding
    }

    return (
        <SSection
            id={style ? style.css_id : ''}
            className={`component ${strapi_component} ${style ? style.css_classes : ''}`}
        >
            <Slider { ...slideSettings }>
                {card.map((slide, index) => (
                    <div className="card-container">
                        <Image image={ slide.image }/>
                        <p>{ slide.text }</p>
                    </div>
                ))}
            </Slider>
        </SSection>
    )
}

export default SliderCard;