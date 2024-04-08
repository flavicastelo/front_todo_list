import ItemTask from "../ItemTask";
import {  ContainerTasksStyled } from "./styles";
import { FiCheckSquare, FiSquare } from "react-icons/fi";
export default function ContainerTasks() {
    const checked = true;
    return (
        <ContainerTasksStyled>
            <ItemTask />
        </ContainerTasksStyled>
    );  
}