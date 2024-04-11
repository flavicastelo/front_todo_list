import styled from "styled-components";
import { colors } from "../../utils/colors";

export const ContainerPage = styled.main`
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
    background-color: ${colors.secundary};
`;

export const ContainerForm = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    background-color:  ${colors.dark_mode};;
    width: 50vw;
    min-height: 90vh;
    box-shadow: 2px 2px 5px 0px #0000004c;
    padding: 2rem;
    @media screen and (max-width: 768px) {
        height: 75vh;
        width: 80vw;
        align-items: center;
        padding: 1rem;
    }
`;

export const ContainerText = styled.div`
    display: flex;
    gap: 0.5rem;
    width: auto;
    justify-content: end;
    @media screen and (max-width: 768px) {
       align-self: center;
    }
`;
export const FormRegister = styled.form`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    @media screen and (max-width: 768px) {
        width: 80vw;
        align-items: center;
    }
`;

export const PassRegex = styled.span`
    align-self: flex-start;
`;

export const ContainerFooter = styled.footer`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: start;
        width: 100%;
        gap: 1rem;
    }
`;