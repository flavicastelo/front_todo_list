import React from "react";
import styled from "styled-components";
import { colors } from "../../utils/colors";

export const InputContainer = styled.div`
`;

export const InputField = styled.input`
    width:  ${props => props.width || "100%"};
    height: ${props => props.height || "2.5rem"};
    padding: 0.75rem;
    background-color: transparent;
    border: 1px solid  ${colors.border_color};
    outline: none;
    color: ${colors.primary};
    @media screen and (max-width: 768px) {
        font-size: 0.8rem;
        width: 72vw;
        height: ${props => props.height || "2rem"};
    }
`;