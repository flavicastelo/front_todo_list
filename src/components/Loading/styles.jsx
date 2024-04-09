import { styled, keyframes } from "styled-components";
import { colors } from "../../utils/colors";

const spinAnimation = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const ContainerLoading = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10vh;
`;

export const LoadingSpinner = styled.div`
    border: 4px solid ${colors.color_transparent};
    border-left-color: ${colors.primary};
    border-radius: 50%;
    width: 4vw;
    height: 4vw;
    animation: ${spinAnimation} 1s linear infinite; 
`;

