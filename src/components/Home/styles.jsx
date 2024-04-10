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
    background-color: ${colors.secundary};
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
    justify-content: center;
    gap: 1rem;
    background-color: ${colors.light_mode};
    width: 50%;
    padding: 4rem 4rem;
    @media screen and (max-width: 768px) {
        height: 75vh;
        width: 100vw;
        align-items: center;
        padding: 3rem;
    }
`;

export const ContainerText = styled.div`
    display: flex;
    gap: 0.5rem;
    width: auto;
    justify-content: end;
    @media screen and (max-width: 768px) {
        flex-direction: column;
        gap: 0;
    }
`;

export const Image = styled.img`
    width: 80%;
    @media screen and (max-width: 768px) {
        width: 50%;
    }
`;

export const FormLogin = styled.form`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    @media screen and (max-width: 768px) {
        align-items: center;
    }
`;