import * as React from "react"
import { Link } from "gatsby"
import tw, { styled } from "twin.macro"
import { useStaticQuery, graphql } from "gatsby"

import Image from "../basic/image"
import RichText from "../basic/richText" 
import MenuList from "../basic/menuList"

const SFooter = styled.footer`
    ${ tw`
        mt-[100px] border-solid border-t-4 border-l-0 border-r-0 border-b-0 border-second-500
    ` }

    .footer-container {
        ${ tw`
            mx-auto my-10 w-10/12 max-w-[960px] grid gap-10 justify-center
            lg:grid-cols-3
            xl:grid-cols-3

        ` }

        > * {
            ${ tw`
  
            ` }
        }

        .footer-logo {
            ${ tw`
                my-10
                lg:w-[340px] lg:my-0
            ` }

            a {
                .img-container {
                    ${ tw`
                        w-[80px] m-auto
                        lg:m-0
                    ` }
                }
            }
            
            .rich-text {
                ${ tw`
                    text-center
                    lg:text-left
                ` }
            }
        }

        .menu {
            ${ tw`
                flex-col justify-center
                lg:justify-start
            ` }

        }

        .footer-cards {
            .card-container {
                ${ tw`
                    grid mx-auto my-10 justify-center
                    lg:mt-0 lg:mb-10 lg:grid-cols-[57px 1fr] lg:gap-[10px]
                ` }

                .img-container {
                    ${ tw`
                        w-[48px] h-[48px] m-auto
                    ` }
                }

                .card-text {
                    p {
                        ${ tw`
                            text-center break-words
                            lg:text-left lg:break-all
                        ` }
                    }
                }
            }
        }
    }

    .footer-copyright {
        ${ tw`
            m-auto bg-second-500 text-white grid m-auto
        ` }

        p {
            ${ tw`
                text-center
            ` }
        }
    }
`

const Footer = () => {
    const  { strapiFooter: { logo, menu, text, card, copyright } }  = useStaticQuery(
        graphql`
            query {
                strapiFooter {
                    id
                    logo {
                        image {
                        url
                        alternativeText
                        }
                    }
                    menu {
                        page {
                        slug
                        title
                        }
                    }
                    text
                    copyright
                    card {
                        id
                        image {
                        formats {
                            thumbnail {
                            url
                            }
                        }
                        alternativeText
                        }
                        text
                    }
                }
            }
        `
    )

    return (
        <SFooter className="snap-start">
            <div className="footer-container">
                <div className="footer-logo">
                    <Link to='/'>
                        { logo.image ? <Image image={ logo.image } /> : logo.text }
                    </Link>
                    <RichText text={ text } />
                </div>
                <MenuList menu={ menu } isMenuActive={ true }  />
                <div className="footer-cards">
                    { card.map((item) => (
                        <div key={`card-${item.id}`} className="card-container">
                            <Image image={ item.image.formats.thumbnail } />
                            <div className="card-text">
                                <p>{ item.text }</p>
                            </div>
                        </div>
                    )) }
                </div>
            </div>
            <div className="footer-copyright"><p>{ copyright }</p></div>
        </SFooter>
    )
}

export default Footer;
