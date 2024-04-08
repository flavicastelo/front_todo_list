import React, { useState, useEffect } from "react";
import { colors } from "../../utils/colors";
import { AddButton, ContainerForm, ContainerPage, Icon, ContainerTasks } from "./styles";
import Header from "../Header";
import InputText from "../InputText";
import api from "../../utils/api";
import ItemTask from "../ItemTask";

export default function Tasks() {
    const [tasks, setTasks] = useState([]);
    const [error, setError] = useState("");
    const idLogged = 5;
    const getTasks = async () => {
        // const token = localStorage.getItem('token');
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjUiLCJpYXQiOjE3MTI1ODE4MDcsImV4cCI6MTcxMjU4MjcwN30.9FG5g_qfCa63uIqY0-0Wq3B-GDKfz1lWY_DDpP61Jv4";

        try {
            const response = await api.get("/task/listtasks", `Bearer ${token}`);
            const data = response.data;
            const filteredTasks = data.filter(task => task.user_id === idLogged);
            setTasks(filteredTasks);

        } catch (error) {
            setError(error);
            console.log(error);
        }
    }
    useEffect(() => {
        getTasks();
    }, []);

    return (
        <><Header />
            <ContainerPage>
                <ContainerForm>
                    <InputText placeholder="Adicionar tarefa" size="57vw" />
                    <AddButton onClick={() => { }} >
                        <Icon />
                    </AddButton>
                </ContainerForm>
                <ContainerTasks>
                    {tasks.length === 0 ? (<ItemTask onClickEdit={() => { }} onClickDelete={() => { }} text={error} />) : (
                        tasks.map((task) => {
                            return <ItemTask key={task.task_id} onClickEdit={() => { }} onClickDelete={() => { }} text={task.description} />
                        })
                    )}
                </ContainerTasks>


            </ContainerPage></>
    );
}
