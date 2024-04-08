import React, { useState, useEffect } from "react";
import { colors } from "../../utils/colors";
import { ContainerPage, ContainerRight } from "./styles";
import Title from "../Title";
import TextPrimary from "../TextPrimary";
import ButtonIcon from "../ButtonIcon";


export default function Header() {

    return (
        <ContainerPage>
            <Title size="48px" />
            <ContainerRight>
                <TextPrimary text="Olá, Usuário" />
               <ButtonIcon text="Sair" color={colors.primary} />
            </ContainerRight>

        </ContainerPage>
    );
}
