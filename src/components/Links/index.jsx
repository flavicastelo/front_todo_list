import React from "react";
import { LinkStyled } from "./styles";

export default function Links({ text, color, size, onClick }) {
    return (
        <LinkStyled color={color} size={size} onClick={onClick}>
            {text}
        </LinkStyled>
    );

}
