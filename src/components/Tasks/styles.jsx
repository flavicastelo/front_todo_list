import styled from "styled-components";
import { colors } from "../../utils/colors";
import { FiPlus } from "react-icons/fi";

export const ContainerPage = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 4rem;
    width: 100vw;
    gap: 1rem;
`;

export const ContainerForm = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 60vw;
`;

export const AddButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  color: ${props => props.color || colors.text_primary};
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: ${props => props.hoverColor || colors.primary};
  }
`;

export const Icon = styled(FiPlus)`
    font-size: ${props => props.size || '24px'};
`;