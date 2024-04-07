import React from "react";
import styled, { css } from "styled-components";
import { colors } from "../../utils/colors";

export const LinkStyled = styled.button`
    color: ${props => props.color || colors.text_primary};
    font-size: ${props => props.size || '24px'};
    text-align: center;
    cursor: pointer;
    border: none;
    background-color: transparent;
`;
