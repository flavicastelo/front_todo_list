import { useState } from "react";
import TextPrimary from "../TextPrimary";
import { AddButton, Checkbox, ContainerIcons, ContainerItem, IconCheck, IconDelete, IconEdit, IconSquare, Item } from "./styles";
import { colors } from "../../utils/colors";
export default function ItemTask({onClickEdit, onClickDelete, text}) {
    const [checked, setChecked] = useState(false);
    
    const toggleChecked = () => {
        setChecked(!checked);
    };

    return (
        <ContainerItem>
            <Item onClick={toggleChecked}>
                <Checkbox>{checked ? <IconCheck /> : <IconSquare />}</Checkbox>
                <TextPrimary text={text} size="14" color={checked ? colors.primary : colors.text_primary} decoration={checked ? "line-through" : "none"}/>
            </Item>
            <ContainerIcons>
                <AddButton  onClick={onClickEdit}>
                    <IconEdit />
                </AddButton>
                <AddButton  onClick={onClickDelete}>
                    <IconDelete />
                </AddButton>
            </ContainerIcons>
        </ContainerItem>

    );
}