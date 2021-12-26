import React from "react";

import generateStrapiUrl from "../../utils/strapi";

const Image = ({ image: { url, alternativeText }, dataSal, dataSalDuration, className }, image) => (
    <div 
        className={ "img-container " + className} 
        data-sal={ dataSal }
        data-sal-duration={ dataSalDuration }
    >
        {console.log(image)}
        <img
            src={ generateStrapiUrl(url) }
            alt={ alternativeText }
            draggable="false"
        />
    </div>
)

export default Image;