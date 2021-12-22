import React from "react";
import tw, { styled } from "twin.macro"
import { Link } from "gatsby"

const SMenuList = styled.nav`
    ${ tw`
        flex-col flex-grow pb-4 text-center transition ease-in-out transition-all
        md:pb-0 md:flex md:justify-end md:flex-row
        max-mdd:grid max-mdd:content-center
    ` }

    a {
        ${ tw`
            uppercase px-4 py-2 mt-2 font-semibold no-underline text-dark-500 transition ease-in-out
            md:mt-0 
            hover:text-second-500 hover:transition ease-in-out
        ` }
    }
`

const MenuList = ({ menu, isMenuActive }) => (
    <SMenuList className={ `menu ${ isMenuActive ? 'is-visible' : 'is-hidden' }` }>
        { menu.map((link) => (
            <Link key={link.page.slug} to={`/${ link.page.slug === "accueil" ? "" : link.page.slug }`}>{ link.page.title }</Link>
        )) }
    </SMenuList>
)

export default MenuList;