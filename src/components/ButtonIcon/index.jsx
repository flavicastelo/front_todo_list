import React from "react";
import { ButtonIconStyled, ContainerButton, Icon } from "./styles";

export default function ButtonIcon({ text, color, size, onClick }) {
    return (
        <ContainerButton color={color}>
            <ButtonIconStyled  size={size} onClick={onClick}>
                {text}
            </ButtonIconStyled>
            <Icon size={size}/>
        </ContainerButton>

    );

}
