import React from "react";
import tw, { styled } from "twin.macro"
import Slider  from "react-slick";
import "../../../style/slick.css"

import Card from "../../basic/card";



const SSection = styled.section`
    ${ tw`
        mx-auto w-10/12 
    ` }

    div.card-slider {
        ${ tw`
            grid grid-cols-9 grid-rows-[8fr 1fr]        
        ` }

        .slick-arrow{
            ${ tw`
                col-span-1 w-5 h-5 m-auto overflow-hidden bg-white border-0 bg-contain text-transparent bg-no-repeat
                xsm:w-10 h-10
        ` }
        }

        .slick-arrow.slick-prev {
            background-image: url('/image/arrow_left_black.svg');
            
            ${ tw`
                ml-0
            ` }
        }

        .slick-arrow.slick-next {
            background-image: url('/image/arrow_left_black.svg');
            transform: rotateY(180deg);

            ${ tw`
                mr-0
            ` }
        }

        .slick-list {
            ${ tw`
                col-span-7
            ` }

            .card-container {
                ${ tw`
                    w-[225px] mx-auto
                ` } 

                .img-container {
                    ${ tw`
                        mx-auto w-[225px] h-[350px] bg-purple-500 relative z-20
                    ` }

                    &:hover {

                        &:after {
                            content: '';
                            background-image: url('/image/add_circle_outline_white.svg');
    
                            ${ tw`
                                block bg-no-repeat bg-contain w-[45px] h-[45px] absolute top-[calc(50% - calc(45px / 2))] left-[calc(50% - calc(45px / 2))] z-0
                            ` }
                        }

                        img {
                            ${ tw`
                                opacity-40 transition
                            ` }

                        }

                    }

                    img {
                        ${ tw`
                            w-full h-full object-cover z-10 transition
                            
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

        ul.slick-dots {
            ${ tw`
                m-auto p-0 w-full col-span-10 text-center
            ` }

            li {
                ${ tw`
                    w-auto inline-block mx-2 cursor-pointer 
                ` }

                button {
                    ${ tw`
                        bg-gray-200 w-[50px] h-[5px] p-0 border-0 text-[0px]
                    ` }
                }
            }

            li.slick-active {
                button {
                    ${ tw`
                        bg-main-500
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
        responsive_settings,
    } 
}) => {

    let responsive = responsive_settings.map((settings) => ({
        breakpoint: settings.breakpoint,
        settings: {
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
            breakpoint: settings.breakpoint,
        }
    }))

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
        mobileFirst: true,
        responsive: responsive,
    }

    return (
        <SSection
            id={ style && style.css_id }
            className={ `component ${strapi_component} ${style && style.css_classes }` }
        >
            <Slider { ...slideSettings }>
                {card.map((item) => (
                    <Card data={ item }/>
                ))}
            </Slider>
        </SSection>
    )
}

export default SliderCard;