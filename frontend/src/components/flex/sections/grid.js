import React from "react";
import { Link } from "gatsby";
import tw, { styled } from "twin.macro"

import RichText from "../../basic/richText";
import Card from "../../basic/card";

const SSection = styled.section`
    ${ tw`
        w-10/12 max-w-[950px] m-auto
    ` }

    .rich-text {
        ${ tw`
            text-center mt-[100px] mb-[50px]
        ` }
    }
 
    .cards-grid {
        ${ tw`
            grid gap-10
            sm:grid-cols-2
            md:grid-cols-3
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

`

const Grid = ( { data: { strapi_component, text, cards, style } }) => (
    <SSection
        id={ style && style.css_id }
        className={ `component ${strapi_component} ${style && style.css_classes }` }
    >
        <RichText text={ text } />
        <div className="cards-grid">
            { cards.map((item) => (
                <Link key={`card-${ item.id }`} to={item.page && item.page.slug !== 'accueil' ? `/${item.page.slug}` : '/' }>
                    <Card data={ item }/>
                </Link>
            ))
            }
        </div>
    </SSection>
)

export default Grid;