import { useState } from "react";
import { AddButton, Checkbox, ContainerIcons, ContainerItem, ContainerPrincipal, IconCancel, IconCheck, IconDelete, IconEdit, IconSave, IconSquare, Item, Line } from "./styles";
import { colors } from "../../utils/colors";
import InputTask from "../InputTask";

export default function ItemTask({ onClickEdit, editable, onClickDelete, text, value, onClickSubmit, onClickCancel, inputValue, onChange }) {
    const [checked, setChecked] = useState(false);

    const toggleChecked = () => {
        setChecked(!checked);
    };

    return (
        <ContainerPrincipal>
            <ContainerItem>
                <Item>
                    <Checkbox onClick={toggleChecked}>{checked ? <IconCheck /> : <IconSquare />}</Checkbox>
                    <InputTask
                        placeholder={text}
                        checked={checked}
                        editable={editable}
                        value={editable ? inputValue : value}
                        maxLength={24}
                        onChange={onChange} />
                </Item>
                {editable ? (
                    <ContainerIcons>
                        <AddButton onClick={onClickSubmit}>
                            <IconSave />
                        </AddButton>
                        <AddButton onClick={onClickCancel}>
                            <IconCancel />
                        </AddButton>
                    </ContainerIcons>
                ) : (
                    <ContainerIcons>
                        <AddButton onClick={onClickEdit}>
                            <IconEdit />
                        </AddButton>
                        <AddButton onClick={onClickDelete}>
                            <IconDelete />
                        </AddButton>
                    </ContainerIcons>
                )}

            </ContainerItem>
            <Line />

        </ContainerPrincipal>

    );
}