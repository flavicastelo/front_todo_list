import React from "react";
import styled, { css } from "styled-components";
import { colors } from "../../utils/colors";

export const InputTaskStyled = styled.input`
    color: ${props => props.checked ? colors.primary : colors.text_primary};
    font-size: ${props => props.size || '1rems'};
    border: none;
    background-color: transparent;
    pointer-events: ${props => props.editable ? 'auto' : 'none'};;
    text-decoration: ${props => props.checked ? 'line-through' : 'none'};
    &::placeholder {
        font-size: ${props => props.size || '1rem'}; 
        color: ${props => props.checked ? colors.primary : colors.text_primary};
       
    }
    width: 100%;
    @media screen and (max-width: 768px) {
        font-size: 0.8rem;
        &::placeholder {
            font-size: ${props => props.size || '0.8rem'}; 
        }
    }
`;
