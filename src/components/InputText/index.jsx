import React from "react";
import { InputContainer, InputField } from "./styles";

export default function InputText({ placeholder, width, height, value, onChange, maxLength, ref }) {
    return (
        <InputContainer>
        <InputField type="text" placeholder={placeholder} height={height} width={width} value={value} onChange={onChange} maxLength={maxLength} ref={ref}/>
      </InputContainer>
    );

}
