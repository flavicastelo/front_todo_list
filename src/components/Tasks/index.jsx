import React, { useState, useEffect } from "react";
import { colors } from "../../utils/colors";
import { AddButton, ContainerForm, ContainerPage, Icon } from "./styles";
import Header from "../Header";
import InputText from "../InputText";
import ContainerTasks from "../ContainerTasks";


export default function Tasks() {

    return (
        <><Header />
            <ContainerPage>
                <ContainerForm>
                    <InputText placeholder="Adicionar tarefa" size="57vw" />
                    <AddButton onClick={()=>{}} >
                        <Icon />
                    </AddButton>
                </ContainerForm>
                <ContainerTasks onClickEdit={()=>{}} onClickDelete={()=>{}}/>
            </ContainerPage></>
    );
}
