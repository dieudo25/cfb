import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";
import styled from "styled-components";
import Button from "../../basic/button";

import generateStrapiUrl from "../../../utils/strapi";

const SSection = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    max-width: 1100px;
    margin: 0 auto;
    grid-column-gap: 50px;

    div.img-container {
        grid-column: 1;
        grid-row: 1;
        width: 650px;
        height: 450px;
        margin: auto;

        img.c2a-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    div.c2a {
        grid-area: second;
        grid-column: 2;
        grid-row: 1;
        margin: auto;
        text-align: right;

        a.c2a-btn {
            margin-top: 20px;
            padding: 10px 30px;
            color: white;
            text-decoration: none;
        }
    }

`

const C2AImage = ({ data: { strapi_component, text, button, image, style } }) => (
    <SSection
        id={style ? style.css_id : ''}
        className={`component ${strapi_component} ${style ? style.css_classes : ''}`}
    >   
        <div className="c2a">
            <div className="c2a-text">
                <ReactMarkdown children={text} remarkPlugins={[remarkGfm]} />
            </div>
            <Button button={button}/>
        </div>
        <div 
            className="img-container"
            data-sal="slide-right"
            data-sal-duration="800"
        >
            <img
                className="c2a-img"
                src={generateStrapiUrl(image.url)}
                alt={image.alternativeText}
            />
        </div>
    </SSection>
)

export default C2AImage;