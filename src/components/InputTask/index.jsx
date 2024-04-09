import React from "react";
import { InputTaskStyled } from "./styles";

export default function InputTask({ placeholder, checked, editable, value, onChange }) {
    return (
        <InputTaskStyled placeholder={placeholder} checked={checked} editable={editable} value={value} onChange={onChange}/>
          
    );

}
