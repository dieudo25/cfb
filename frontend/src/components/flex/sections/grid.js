import React from "react";
import { Link } from "gatsby";
import tw, { styled } from "twin.macro"

import RichText from "../../basic/richText";
import Card from "../../basic/card";
import Button from "../../basic/button";

const SSection = styled.section`
    ${ tw`
        w-10/12 max-w-[950px] m-auto grid gap-10 justify-items-center
    ` }

    ${ ({ className }) => className.includes('contact-grid') && tw`
        justify-items-start
    ` }
 
    .cards-grid {
        ${ tw`
            grid gap-10
            sm:grid-cols-2
        ` }

        ${ ({ className }) => className.includes('services-grid') && tw`
            lg:grid-cols-3
        ` }

        ${ ({ className }) => className.includes('services-info') && `
           word-break: break-word;
        ` }

        a {
            ${ tw`
                no-underline text-dark-500
            ` }
        }

        .card-container {
            ${ ({ className }) => className.includes('services-grid') && tw`
                w-[225px] mx-auto
            ` }

            ${ ({ className }) => className.includes('services-info') && tw`
                grid grid-cols-[1fr 3fr] gap-2 items-center
                lg:grid-cols-[50px 1fr] lg:gap-5
            ` }

            .img-container {

                ${ ({ className }) => className.includes('services-grid') && tw`
                    mx-auto w-[225px] h-[350px] relative z-20
                ` }

                ${ ({ className }) => className.includes('services-info') && tw`
                    w-12 h-12
                ` }

                img {
                    ${ ({ className }) => className.includes('services-grid') && tw`
                        w-full h-full object-cover z-10 transition
                    ` }
                }

                &:hover {

                    &:after {
                        ${ ({ className }) => className.includes('services-grid') && `
                            content: '';
                            background-image: url('/image/add_circle_outline_white.svg');
                        ` }
                        
                        ${ ({ className }) => className.includes('services-grid') && tw`
                            block bg-no-repeat bg-contain w-[45px] h-[45px] absolute top-[calc(50% - calc(45px / 2))] left-[calc(50% - calc(45px / 2))] z-0 transition
                        ` }
                    }

                    img {
                        ${ ({ className }) => className.includes('services-grid') && tw`
                            opacity-40 transition
                        ` }
                    }
                }
            }

            .rich-text {
                p {
                    ${ ({ className }) => className.includes('services-grid') && tw`
                        mx-auto w-[215px] text-center
                    ` }
                }   
            }
        }
    }

`

const Grid = ( { data: { strapi_component, text, cards, style, button } }) => (
    <SSection
        id={ style && style.css_id }
        className={ `component ${strapi_component} ${style && style.css_classes }` }
    >
        <RichText className="grid-text" text={ text } />
        <div className="cards-grid">
            { cards.map((item) => ( item.page
                ?
                <Link key={`card-${ item.id }`} to={item.page && item.page.slug !== 'accueil' ? `/${item.page.slug}` : '/' }>
                    <Card data={ item } className={ style.css_classes }/>
                </Link>
                :
                <Card key={`card-${ item.id }`} data={ item }/>
            ))
            }
        </div>
        { button && <Button button={ button }/> }
    </SSection>
)

export default Grid;