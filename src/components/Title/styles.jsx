import styled from "styled-components";
import { colors } from "../../utils/colors";

export const ContainerTitle= styled.section`
    display: flex;
    justify-content: center;
`;
export const TitleColorPrimary = styled.h1`
    color: ${colors.primary};
    font-size: 96px;
    @media screen and (max-width: 768px) {
        font-size: 12vw;
    }
`;
export const TitleColorSecundary = styled.h1`
    color: ${colors.text_primary};
    font-size: 96px;
    @media screen and (max-width: 768px) {
        font-size: 12vw;
    }
`;

