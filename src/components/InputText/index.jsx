import React from "react";
import { InputContainer, InputField } from "./styles";

export default function InputText({ placeholder, size }) {
    return (
        <InputContainer>
        <InputField type="text" placeholder={placeholder} size={size} />
      </InputContainer>
    );

}
