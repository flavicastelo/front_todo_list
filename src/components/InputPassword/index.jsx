import React, { useState } from "react";
import { InputContainer, InputField, ToggleButton } from "./styles";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { colors } from "../../utils/colors";

export default function InputPassword({ placeholder }) {
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <InputContainer>
            <InputField
                type={showPassword ? "text" : "password"}
                placeholder={placeholder}
            />
            <ToggleButton onClick={toggleShowPassword}>
                {showPassword ? <FaEyeSlash  color={colors.text_primary} size={18} /> : <FaEye color={colors.text_primary}  size={18}  />}
            </ToggleButton>
        </InputContainer>
    );

}
