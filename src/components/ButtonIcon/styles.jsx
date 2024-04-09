import React from "react";
import styled, { css } from "styled-components";
import { colors } from "../../utils/colors";
import { FaSignOutAlt } from "react-icons/fa";

export const ContainerButton = styled.button`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-align: center;
    cursor: pointer;
    border: none;
    background-color: transparent;
        color: ${props => props.color || colors.text_primary};
    &:hover {
        color: ${props => props.hoverColor || colors.text_primary};
    }
    @media screen and (max-width: 768px) {
        font-size: 4vw;
    }
`;
export const ButtonIconStyled = styled.p`
    /* color: ${props => props.color || colors.text_primary}; */
    font-size: ${props => props.size || '24px'};
`;
export const Icon = styled(FaSignOutAlt)`
    margin-right: 4px; 
    /* color: ${props => props.color || colors.text_primary}; */
    font-size: ${props => props.size || '24px'};
`;