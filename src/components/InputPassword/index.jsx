import React, { useState } from "react";
import { InputContainer, InputField, ToggleButton } from "./styles";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { colors } from "../../utils/colors";
import { useMediaQuery } from "react-responsive";

export default function InputPassword({ placeholder, width, height, onChange }) {
    const [showPassword, setShowPassword] = useState(false);
    const isMobile = useMediaQuery({ maxWidth: 768 });
    
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <InputContainer>
            <InputField
                type={showPassword ? "text" : "password"}
                placeholder={placeholder} onChange={onChange} width={width} height={height} 
            />
            <ToggleButton type= "button" onClick={toggleShowPassword}>
            {showPassword ? <FaEyeSlash color={colors.text_primary} size={isMobile ? 24 : 18} /> : <FaEye color={colors.text_primary} size={isMobile ? 22 : 18} />}

            </ToggleButton>
        </InputContainer>
    );

}
