import React, { useState, useEffect } from "react";
import { colors } from "../../utils/colors";
import { ContainerPage, ContainerRight } from "./styles";
import Title from "../Title";
import TextPrimary from "../TextPrimary";
import ButtonIcon from "../ButtonIcon";
import { logout } from "../../utils/auth";
import { useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();
    const onClickLogout = () =>{
        logout();
        navigate("/");
    }
    const userName = localStorage.getItem('user_name');
    return (
        <ContainerPage>
            <Title size="48px" />
            <ContainerRight>
                <TextPrimary text={`Olá, ${userName}`} size='3vh'/>
               <ButtonIcon size='3vh' text="Sair" color={colors.primary} onClick={onClickLogout}/>
            </ContainerRight>

        </ContainerPage>
    );
}
