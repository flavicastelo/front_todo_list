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
    font-size: 18px;
    @media screen and (max-width: 768px) {
        font-size: 4vw;
        height: 4rem;
    }
`;