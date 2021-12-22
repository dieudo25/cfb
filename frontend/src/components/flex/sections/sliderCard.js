import React from "react";
import tw, { styled } from "twin.macro"
import { Link } from "gatsby";
import Slider  from "react-slick";
import "../../../style/slick.css";

import RichTextButton from "./richTextButton";
import Card from "../../basic/card";




const SSection = styled.section`
    ${ tw`
        mx-auto w-10/12 grid content-center items-center gap-10
    ` }

    section {
        ${ tw`
            max-h-[20vh] 
        ` }
    }

    div.cards-slider {
        ${ tw`
            max-h-[80vh] grid grid-cols-9 gap-10
        ` }

        .slick-arrow{
            ${ tw`
                col-span-1 w-5 h-5 m-auto overflow-hidden bg-white border-0 bg-contain text-transparent bg-no-repeat cursor-pointer
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

            a {
                ${ tw`
                    no-underline text-dark-500
                ` }

                .card-container {
                    ${ tw`
                        w-[225px] mx-auto
                    ` } 
    
                    .img-container {
    
                        ${ tw`
                            mx-auto w-[225px] h-[350px] relative z-20
                        ` }
    
                        &:hover {
    
                            &:after {
                                content: '';
                                background-image: url('/image/add_circle_outline_white.svg');
        
                                ${ tw`
                                    block bg-no-repeat bg-contain w-[45px] h-[45px] absolute top-[calc(50% - calc(45px / 2))] left-[calc(50% - calc(45px / 2))] z-0 transition
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
        cards,
        style,
        settings,
        responsive_settings,
        text,
        first_element,
        button,
        animation_text,
        animation_button 
    } 
}) => {

    let richTextButton = {
        text: text,
        first_element: first_element,
        button: button,
        animation_text: animation_text,
        animation_button: animation_button,
    }

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
        className: "cards-slider",
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
            <RichTextButton data={ richTextButton } />
            <Slider { ...slideSettings }>
                {cards.map((item) => (
                    <Link key={`slide-${ item.id }`} to={item.page && item.page.slug !== 'accueil' ? item.page.slug : '/' }>
                        <Card data={ item }/>
                    </Link>
                ))}
            </Slider>
        </SSection>
    )
}

export default SliderCard;