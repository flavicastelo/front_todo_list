import React from "react";
import { ContainerTitle, TitleStyled } from "./styles";
import { colors } from "../../utils/colors";

export default function Title({size}) {
    return (
        <ContainerTitle>
            <TitleStyled  size={size}>
                IZI
            </TitleStyled>
            <TitleStyled color={colors.text_primary} size={size}>
                LIST
            </TitleStyled>
        </ContainerTitle>
    );

}
