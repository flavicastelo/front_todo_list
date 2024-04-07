import React from "react";
import styled from "styled-components";

export const InputContainer = styled.div`
    display: flex;
    position: relative;
`;

export const InputField = styled.input`
    width: 100%;
    height: 2rem;
    padding: 0.5rem;
    border: 1px solid #ccc;
    outline: none;
`;

export const ToggleButton = styled.button`
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    background: none;
    border: none;
    cursor: pointer;
`;