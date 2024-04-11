import React from "react";
import { ButtonStyled } from "./styles";

export default function Button({type, onClick, text, textColor, bgColor, size }) {
    return (
        <ButtonStyled size={size} type={type} textColor={textColor} bgColor={bgColor} onClick={onClick}>
            {text}
        </ButtonStyled>
    );

}
