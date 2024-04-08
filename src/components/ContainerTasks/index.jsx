import ItemTask from "../ItemTask";
import {  ContainerTasksStyled } from "./styles";
export default function ContainerTasks({onClickEdit, onClickDelete, text}) {
    const checked = true;
    return (
        <ContainerTasksStyled>
            <ItemTask onClickEdit={onClickEdit} onClickDelete={onClickDelete} text={text} />
        </ContainerTasksStyled>
    );  
}