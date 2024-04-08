import React from "react";
import styled from "styled-components";

export const InputContainer = styled.div`
    display: flex;
    position: relative;
`;

export const InputField = styled.input`
    width: 100%;
    height: 2.5rem;
    padding: 0.75rem;
    border: 1px solid #ccc;
    outline: none;
    @media screen and (max-width: 768px) {
        font-size: 4vw;
        height: 3rem;
    }
`;

export const ToggleButton = styled.button`
    position: absolute;
    top: 0.75rem;
    right: 0.75rem;
    background: none;
    border: none;
    cursor: pointer;
   
`;