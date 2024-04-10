import React from "react";
import { InputContainer, InputField } from "./styles";

export default function InputText({ placeholder, size, value, onChange, maxLength, ref }) {
    return (
        <InputContainer>
        <InputField type="text" placeholder={placeholder} size={size} value={value} onChange={onChange} maxLength={maxLength} ref={ref}/>
      </InputContainer>
    );

}
