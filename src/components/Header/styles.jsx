import styled from "styled-components";
import { colors } from "../../utils/colors";

export const ContainerPage = styled.header`
    display: flex;
    background-color: ${colors.secondary};
    height: 16vh;
    padding: 1.5rem;
    align-items: center;
    justify-content: space-between;
`;
export const ContainerRight = styled.div`
    display: flex;
    gap: 14rem;
`;
