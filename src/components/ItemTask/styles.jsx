import styled from "styled-components";
import { FiCheckSquare, FiSquare, FiEdit, FiTrash2 } from "react-icons/fi";
import { FaSave, FaTimes } from 'react-icons/fa';
import { colors } from "../../utils/colors";

export const ContainerPrincipal = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;
export const ContainerItem = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    margin-bottom: 0.2rem;
`;

export const Item = styled.div`
    display: flex;
    align-items: center;
    width: calc(80vw - 1rem);
`;

export const Checkbox = styled.div`
    cursor: pointer;
    display: flex;
`;

export const ContainerIcons = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
    @media screen and (max-width: 768px) {
        gap: 0;
    }
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

export const IconCheck = styled(FiCheckSquare)`
    margin-right: 4px; 
    color: ${props => props.color || colors.primary};
    font-size: ${props => props.size || '18px'};
`;

export const IconSquare = styled(FiSquare)`
    margin-right: 4px; 
    color: ${props => props.color || colors.text_primary};
    font-size: ${props => props.size || '18px'};
`;

export const IconEdit = styled(FiEdit)`
    margin-right: 4px; 
    color: ${props => props.color || colors .text_primary};
    font-size: ${props => props.size || '18px'};
    transition: color 0.3s ease;
    &:hover {
        color: ${props => props.hoverColor || colors.primary};
    }
`;

export const IconDelete = styled(FiTrash2)`
    color: ${props => props.color || colors.text_primary};
    font-size: ${props => props.size || '18px'};
    transition: color 0.3s ease;
    &:hover {
        color: ${props => props.hoverColor || colors.primary};
    }
`;

export const IconSave = styled(FaSave)`
    margin-right: 4px; 
    color: ${props => props.color || colors.text_primary};
    font-size: ${props => props.size || '18px'};
    transition: color 0.3s ease;
    &:hover {
        color: ${props => props.hoverColor || colors.primary};
    }
`;

export const IconCancel = styled(FaTimes)`
    color: ${props => props.color || colors.text_primary};
    font-size: ${props => props.size || '18px'};
    transition: color 0.3s ease;
    &:hover {
        color: ${props => props.hoverColor || colors.primary};
    }
`;

export const Line = styled.hr`
     margin-bottom: 0.5rem;
     border: 1px solid #cccccc65; 
`;