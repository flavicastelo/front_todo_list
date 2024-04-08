import React from "react";
import { TitleSecundaryStyled } from "./styles";

export default function TitleSecundary({ text, color, size }) {
    return (
        <TitleSecundaryStyled color={color} size={size}>
            {text}
        </TitleSecundaryStyled>
    );

}
