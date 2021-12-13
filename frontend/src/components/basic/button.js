import React from "react";
import styled from "styled-components";
import { Link } from "gatsby"

const SButton = styled(Link)`
    margin-top: 20px;
    padding: 10px 30px;
    color: white;
    text-decoration: none;

`

const Button = ({ button: { text, color } }) => (
    <SButton
        to={'/'} 
        className="c2a-btn"
        style={{backgroundColor: color}}
    >
        {text}
    </SButton>
)

export default Button;