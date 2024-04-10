import React from "react";
import { TextPrimaryStyled } from "./styles";

export default function TextPrimary({ text, color, size, decoration, align }) {
    return (
        <TextPrimaryStyled color={color} size={size} decoration={decoration} align={align}>
            {text}
        </TextPrimaryStyled>
    );

}
