import React, { useState, useEffect } from "react";
import { colors } from "../../utils/colors";
import { ContainerHeader, ContainerRight } from "./styles";
import Title from "../Title";
import TextPrimary from "../TextPrimary";
import ButtonIcon from "../ButtonIcon";
import { logout } from "../../utils/auth";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

export default function Header() {
    const navigate = useNavigate();
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const onClickLogout = () => {
        logout();
        navigate("/");
    }
    const userName = localStorage.getItem('user_name');
    return (
        <ContainerHeader>
            <Title size='2rem' />
            <ContainerRight>
                <TextPrimary text={`Olá, ${userName}`} size='1rem' />
                <ButtonIcon isMobile={isMobile} size='1rem' text="Sair" color={colors.primary} onClick={onClickLogout} />
            </ContainerRight>

        </ContainerHeader>
    );
}
