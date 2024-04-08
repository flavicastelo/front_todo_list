import React from "react";
import styled, { css } from "styled-components";
import { colors } from "../../utils/colors";

export const InputTaskStyled = styled.input`
    color: ${props => props.checked ? colors.primary : colors.text_primary};
    font-size: ${props => props.size || '18px'};
    border: none;
    background-color: transparent;
    pointer-events: ${props => props.editable ? 'auto' : 'none'};;
    text-decoration: ${props => props.checked ? 'line-through' : 'none'};
  
    @media screen and (max-width: 768px) {
        font-size: 4vw;
    }
`;
