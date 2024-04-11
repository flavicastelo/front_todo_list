import React from "react";
import styled from "styled-components";

export const InputContainer = styled.div`
    display: flex;
    position: relative;
`;

export const InputField = styled.input`
    width:  ${props => props.width || "100%"};
    height: ${props => props.height || "2.5rem"};
    padding: 0.75rem;
    border: 1px solid #ccc;
    outline: none;
    @media screen and (max-width: 768px) {
        font-size: 0.8rem;
        width: 72vw;
        height: ${props => props.height || "2rem"};
    }
`;

export const ToggleButton = styled.button`
    position: absolute;
    top: 0.6rem;
    right: 0.5rem;
    background: none;
    border: none;
    cursor: pointer;
    @media screen and (max-width: 768px) {
        top: 0.3rem;
        right: 0.5rem;
    }
`;