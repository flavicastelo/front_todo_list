import React from "react";
import { ContainerSubHeader } from "./styles";
import Title from "../Title";
import TextPrimary from "../TextPrimary";

export default function SubHeader() {
    return (
        <ContainerSubHeader>
            <Title />
            <TextPrimary text="Organize sua vida com a ajuda de um to-do list simples e eficiente" />
        </ContainerSubHeader>
    );

}
