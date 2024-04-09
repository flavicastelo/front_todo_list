import styled from "styled-components";
import { colors } from "../../utils/colors";

export const ContainerPage = styled.header`
    display: flex;
    background-color: ${colors.secondary};
    height: 10vh;
    padding: 1.5rem;
    align-items: center;
    justify-content: space-between;
    box-shadow: 2px 2px 5px 0px ${colors.transparent_dark};
`;
export const ContainerRight = styled.div`
    display: flex;
    gap: 14rem;
`;
