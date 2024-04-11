import styled from 'styled-components';
import { colors } from '../../utils/colors';

export const AlertContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 2rem;
  border: 1px solid #ccc;
  width: 40vw;
  min-height: 40vh;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 9999;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  @media screen and (max-width: 768px) {
        width: 70vw;
}
`;

export const Message = styled.p`

`;

export const Button = styled.button`
  background-color: ${colors.primary};
  width: 20%;
  color: #FFF;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  @media screen and (max-width: 768px) {
        width: 40%;
}
`;