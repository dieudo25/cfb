import React from "react";

import generateStrapiUrl from "../../utils/strapi";

const Image = ({ image: { url, alternativeText }, dataSal, dataSalDuration }) => (
    <div 
        className="img-container"
        data-sal={ dataSal }
        data-sal-duration={ dataSalDuration }
    >
        <img
            src={ generateStrapiUrl(url) }
            alt={ alternativeText }
        />
    </div>
)

export default Image;