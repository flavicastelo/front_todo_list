import React from "react";
import { InputTaskStyled } from "./styles";

export default function InputTask({ placeholder, checked, editable, value, maxLength, onChange }) {
    return (
        <InputTaskStyled
            placeholder={placeholder}
            checked={checked}
            editable={editable}
            value={value}
            onChange={onChange}
            maxLength={maxLength} />
    );
}
