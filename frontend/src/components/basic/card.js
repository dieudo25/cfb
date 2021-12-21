import React from "react";

import Image from "./image";

const Card = ({ data: { id, image, text } } ) => (
    <>
        <div key={`slide-${id}`} className="card-container">
            <Image image={ image.formats.small }/>
            <p>{ text }</p>
        </div>
    </>
)

export default Card;