import { useState } from "react";
import { AddButton, Checkbox, ContainerIcons, ContainerItem, IconCheck, IconDelete, IconEdit, IconSquare, Item } from "./styles";
import { colors } from "../../utils/colors";
import InputTask from "../InputTask";

export default function ItemTask({ onClickEdit, onClickDelete, text }) {
    const [checked, setChecked] = useState(false);
    const [editable, setEditable] = useState(false);
    
    const toggleChecked = () => {
        setChecked(!checked);
    };
    const toggleEditable = () => {
        setEditable(!editable);
    };
    return (
        <ContainerItem>
            <Item>
                <Checkbox onClick={toggleChecked}>{checked ? <IconCheck /> : <IconSquare />}</Checkbox>
                <InputTask
                    placeholder={text}
                />
            </Item>
            <ContainerIcons>
                <AddButton onClick={toggleEditable}>
                    <IconEdit />
                </AddButton>
                <AddButton onClick={onClickDelete}>
                    <IconDelete />
                </AddButton>
            </ContainerIcons>
        </ContainerItem>

    );
}