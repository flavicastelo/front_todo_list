import React from "react";
import { ButtonIconStyled, ContainerButton, Icon } from "./styles";

export default function ButtonIcon({ text, color, size, onClick }) {
    return (
        <ContainerButton>
            <ButtonIconStyled color={color} size={size} onClick={onClick}>
                {text}
            </ButtonIconStyled>
            <Icon color={color} size={size}/>
        </ContainerButton>

    );

}
