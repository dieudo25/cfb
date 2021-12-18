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

        ul.slick-dots {
            ${ tw`
                m-auto p-0 w-full col-span-10 text-center
            ` }

            li {
                ${ tw`
                    w-auto inline-block mx-2 cursor-pointer 
                ` }

                button {
                    ${ `
                        
                    ` }
                    background-color: #C4C4C4;
                    opacity: .5;
                    width: 50px;
                    height: 5px;
                    padding: 0;
                    border: 0;
                    font-size: 0;
                }
            }

            li.slick-active {
                button {
                    background-color: #FF661B;
                    opacity: 100%;
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