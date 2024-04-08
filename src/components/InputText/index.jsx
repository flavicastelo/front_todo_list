import React from "react";
import { InputContainer, InputField } from "./styles";

export default function InputText({ placeholder, size, value, onChange, ref }) {
    return (
        <InputContainer>
        <InputField type="text" placeholder={placeholder} size={size} value={value} onChange={onChange} ref={ref}/>
      </InputContainer>
    );

}
