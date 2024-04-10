import styled from "styled-components";
import { colors } from "../../utils/colors";

export const ContainerHeader = styled.header`
    display: flex;
    background-color: ${colors.secundary};
    height: 4rem;
    width: 100vw;
    padding: 1.5rem;
    align-items: center;
    justify-content: space-between;
    box-shadow: -2px 2px 5px 0px ${colors.transparent_dark};

`;
export const ContainerRight = styled.div`
    display: flex;
    width: 30vw;
    align-items: center;
    justify-content: space-between;
   
`;
