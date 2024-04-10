import React from "react";
import styled from "styled-components";

export const ButtonStyled = styled.button`
    background-color: ${(props) => props.bgColor};
    color: ${(props) => props.textColor};
    border: none;
    cursor: pointer;
    width: 100%;
    height: 2.5rem;
    font-weight: bold;
    font-size: 1rem;
    @media screen and (max-width: 768px) {
        width: 72vw;
    }
`;