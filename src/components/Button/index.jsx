import React from "react";
import { ButtonStyled } from "./styles";

export default function Button({type, onClick, text, textColor, bgColor }) {
    return (
        <ButtonStyled type={type} textColor={textColor} bgColor={bgColor} onClick={onClick}>
            {text}
        </ButtonStyled>
    );

}
