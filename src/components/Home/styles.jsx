import styled from "styled-components";
import { colors } from "../../utils/colors";

export const ContainerPage = styled.main`
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    @media screen and (max-width: 768px) {
        flex-direction: column; 
    }
`;

export const SectionLeft = styled.section`
    background-color: ${colors.secondary};
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 768px) {
        height: 25vh;
        width: 100vw;
    }
`;

export const SectionRight = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: #FFF;
    width: 50%;
    padding: 4em 4rem;
    @media screen and (max-width: 768px) {
        height: 75vh;
        width: 100vw;
    }
`;

export const ContainerText = styled.div`
    display: flex;
    gap: 0.5rem;
    width: auto;
    justify-content: end;
`;

export const Image = styled.img`
    width: 80%;
`;