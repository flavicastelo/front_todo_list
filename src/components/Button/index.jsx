import React from "react";
import { ButtonStyled } from "./styles";

export default function Button({ text, textColor, bgColor }) {
    return (
        <ButtonStyled textColor={textColor} bgColor={bgColor}>
            {text}
        </ButtonStyled>
    );

}
