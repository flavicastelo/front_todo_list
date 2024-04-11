import React from "react";
import { ButtonIconStyled, ContainerButton, Icon } from "./styles";

export default function ButtonIcon({ text, color, size, onClick, isMobile }) {
    return (
        isMobile ? (
            <ContainerButton color={color} onClick={onClick}>
                <Icon size={size} />
            </ContainerButton>
        ) : (
            <ContainerButton onClick={onClick} color={color}>
                <ButtonIconStyled size={size} >
                    {text}
                </ButtonIconStyled>
                <Icon size={size} />
            </ContainerButton>
        )

    );

}
