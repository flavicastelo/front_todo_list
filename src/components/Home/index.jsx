import React, { useState, useEffect } from "react";
import { ContainerPage, ContainerText, Image, SectionLeft, SectionRight } from "./styles";
import Title from "../Title";
import TextPrimary from "../TextPrimary";
import { colors } from "../../utils/colors";
import InputText from "../InputText";
import InputPassword from "../InputPassword";
import Button from "../Button";
import image from "../../assets/img-todolist.png";
import Links from "../Links";
import TitleSecundary from "../TitleSecundary";
import  { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();
    return (
        <ContainerPage>
            <SectionLeft>
                <Image src={image} />
            </SectionLeft>
            <SectionRight>
                <Title />
                <TextPrimary text="Organize sua vida com a ajuda de um to-do list simples e eficiente" />
                <TitleSecundary text="LOGIN" color={colors.primary} size="48px" />
                <InputText placeholder="E-mail" />
                <InputPassword placeholder="Senha" />
                <Button text="ENTRAR" textColor="#FFF" bgColor={colors.primary} />
                <ContainerText>
                    <TextPrimary text="Ainda não possui uma conta? " color={colors.text_primary} size="18px"/>
                    <Links text="Cadastre-se " color={colors.primary} size="18px" onClick={() => navigate("/register")}/>
                </ContainerText>
            </SectionRight>
        </ContainerPage>
    );
}
