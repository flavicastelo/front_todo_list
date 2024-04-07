import React from "react";
import { TextPrimaryStyled } from "./styles";

export default function TextPrimary({ text, color, size }) {
    return (
        <TextPrimaryStyled color={color} size={size}>
            {text}
        </TextPrimaryStyled>
    );

}
