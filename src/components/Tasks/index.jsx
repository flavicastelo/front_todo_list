import React, { useState, useEffect } from "react";
import { colors } from "../../utils/colors";
import { AddButton, ContainerForm, ContainerPage, Icon, ContainerTasks } from "./styles";
import Header from "../Header";
import InputText from "../InputText";
import api from "../../utils/api";
import ItemTask from "../ItemTask";

export default function Tasks() {
    const [tasks, setTasks] = useState([]);
    const [error, setError] = useState('');
    const [newDescription, setNewDescription] = useState('');
    const [description, setDescription] = useState('');
    const idStorage = localStorage.getItem('user_id');
    const userId = parseInt(idStorage);
    const token = localStorage.getItem('token');

    const getTasks = async () => {

        try {
            const response = await api.get("/task/listtasks", `Bearer ${token}`);
            const data = response.data;
            const filteredTasks = data.filter(task => task.user_id === userId);
            setTasks(filteredTasks);
            console.log('listando com sucesso');
        } catch (error) {
            setError(error);
            console.log(error);
        }
    }
    useEffect(() => {
        getTasks();

    }, []);

    const addTask = async (e) => {
        const data = {
            userId: userId,
            description: description
        }
        try {
            const response = await api.post("/task/createtasks", data, `Bearer ${token}`);
            setDescription('');
            getTasks();

        } catch (error) {
            setError(error);
            console.log(error);
        }
    }

    // const editTask = async (e) => {
    //     const data = {
    //         newDescription: newDescription
    //     }
    //     try {
    //         const response = await api.put(`/task/edittask/${userId}/${taskId}}`, data, `Bearer ${token}`);
    //         setNewDescription('');
    //         getTasks();
    //     } catch (error) {
    //         setError(error);
    //         console.log(error);
    //     }
    // }

    const deleteTask = async (userId, taskId) => {
        try {
            const response = await api.delete(`/task/deletetask/${userId}/${taskId}`, `Bearer ${token}`);
            getTasks();
            console.log("excluído com sucesso");
        } catch (error) {
            setError(error);
            console.log(taskId);
        }
    }
    return (
        <><Header />
            <ContainerPage>
                <ContainerForm onSubmit={addTask}>
                    <InputText placeholder="Adicionar tarefa" size="57vw" value={description} onChange={(e) => setDescription(e.target.value)} />
                    <AddButton onClick={() => { }} >
                        <Icon />
                    </AddButton>
                </ContainerForm>
                <ContainerTasks>
                    {tasks.length === 0 ? (<ItemTask onClickEdit={() => { }} onClickDelete={()=>{}} text={error} />) : (
                        tasks.map((task) => {
                            return <ItemTask key={task.task_id} onClickEdit={() => { }} onClickDelete={() => deleteTask(userId, parseInt(task.task_id))} text={task.description} />
                        })
                    )}
                </ContainerTasks>


            </ContainerPage></>
    );
}
