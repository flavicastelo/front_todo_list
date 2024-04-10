import React from "react";
import styled, { css } from "styled-components";
import { colors } from "../../utils/colors";

export const TextPrimaryStyled = styled.p`
    color: ${props => props.color || colors.text_primary};
    font-size: ${props => props.size || '1rem'};
    text-align: center;
    text-decoration: ${props => props.decoration || 'none'};
    @media screen and (max-width: 768px) {
        font-size: ${props => props.size || '0.8rem'};
    }
`;
