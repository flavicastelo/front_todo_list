import React, { useState, useEffect } from "react";
import { ContainerForm, ContainerPage, ContainerText } from "./styles";
import Title from "../Title";
import TextPrimary from "../TextPrimary";
import TitleSecundary from "../TitleSecundary";
import InputText from "../InputText";
import Button from "../Button";
import Links from "../Links";
import { colors } from "../../utils/colors";
import  { useNavigate } from "react-router-dom";

export default function Register() {
    const navigate = useNavigate();
    return (
        <ContainerPage>
            <ContainerForm>
            <Title />
                <TextPrimary text="Organize sua vida com a ajuda de um to-do list simples e eficiente" size={18} />
                <TitleSecundary text="CADASTRE-SE" color={colors.primary} size="32px" />
                <InputText placeholder="Nome" />
                <InputText placeholder="E-mail" />
                <InputText placeholder="Senha" />
                <InputText placeholder="Repita a senha" />
                <Button text="ENVIAR" textColor="#FFF" bgColor={colors.primary} />
                <ContainerText>
                    <TextPrimary text="Possui uma conta? " color={colors.text_primary} size="14px"/>
                    <Links text="Entre aqui " color={colors.primary} size="14px" onClick={() => navigate("/")}/>
                </ContainerText>
            </ContainerForm>
        </ContainerPage>
    );
}
