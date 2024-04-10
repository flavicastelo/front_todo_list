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
   
`;
export const ButtonIconStyled = styled.p`
    font-size: ${props => props.size || '1rem'};
`;
export const Icon = styled(FaSignOutAlt)`
    margin-right: 4px; 
    font-size: ${props => props.size || '1rem'};
`;