import styled from "styled-components";
import { colors } from "../../utils/colors";

export const ContainerPage = styled.main`
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
    background-color: ${colors.secondary};
`;

export const ContainerForm = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #FFF;
    width: 40vw;
    height: 80vh;
    box-shadow: 2px 2px 5px 0px #0000004c;
    padding: 2rem;
    @media screen and (max-width: 768px) {
        width: 80vw;
    }
`;

export const ContainerText = styled.div`
    display: flex;
    gap: 0.5rem;
    width: auto;
    justify-content: end;
    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`;