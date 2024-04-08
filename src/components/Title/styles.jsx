import styled from "styled-components";
import { colors } from "../../utils/colors";

export const ContainerTitle= styled.section`
    display: flex;
    justify-content: center;
`;
export const TitleStyled = styled.h1`
    color:  ${props => props.color || colors.primary};
    font-size: ${props => props.size || '96px'};
    @media screen and (max-width: 768px) {
        font-size: 12vw;
    }
`;

