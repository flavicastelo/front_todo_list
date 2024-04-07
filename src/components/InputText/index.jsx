import React from "react";
import { InputContainer, InputField } from "./styles";

export default function InputText({ placeholder }) {
    return (
        <InputContainer>
        <InputField type="text" placeholder={placeholder} />
      </InputContainer>
    );

}
