import React from "react";
import styled, { css } from "styled-components";
import { colors } from "../../utils/colors";

export const TitleSecundaryStyled = styled.h2`
    color: ${props => props.color || colors.text_primary};
    font-size: ${props => props.size || '24px'};
    text-align: center;
    @media screen and (max-width: 768px) {
        font-size: 7vw;
    }
`;
