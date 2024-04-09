// Em Tasks.js

import React, { useState, useEffect } from "react";
import { colors } from "../../utils/colors";
import { AddButton, ContainerForm, ContainerPage, Icon, ContainerTasks } from "./styles";
import Header from "../Header";
import InputText from "../InputText";
import api from "../../utils/api";
import ItemTask from "../ItemTask";
import TextPrimary from "../TextPrimary";
import { useNavigate } from "react-router";
import Loading from "../Loading";


export default function Tasks() {
    const navigate = useNavigate();
    const [tasks, setTasks] = useState([]);
    const [error, setError] = useState('');
    const [editableTasks, setEditableTasks] = useState({}); 
    const [newDescriptions, setNewDescriptions] = useState({}); 
    const [description, setDescription] = useState('');
    const idStorage = localStorage.getItem('user_id');
    const userId = parseInt(idStorage);
    const token = localStorage.getItem('token');
    const [isLoading, setIsLoading] = useState(true);

    const getTasks = async () => {
        try {
            const response = await api.get("/task/listtasks", `Bearer ${token}`);
            const data = response.data;
            const filteredTasks = data.filter(task => task.user_id === userId);
            setTasks(filteredTasks);
            setIsLoading(false);
        } catch (error) {
            if (!error?.response) {
                showErrorAlert('No Server Response.');
            } else if (error.response?.status === 400) {
                showErrorAlert('Login expirou, logue novamente!');
            }
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
            setError(error.response.data.error);
        }
    }

    const toggleEditable = (taskId) => {
        setEditableTasks({
            ...editableTasks,
            [taskId]: !editableTasks[taskId] 
        });
    };

    const editTask = async (userId, taskId, newDescription) => {
        const data = {
            newDescription: newDescription 
        }
        try {
            const response = await api.put(`/task/edittask/${userId}/${taskId}`, data, `Bearer ${token}`);
            delete newDescriptions[taskId]; 
            setEditableTasks({
                ...editableTasks,
                [taskId]: false 
            });
            window.location.reload();
            getTasks();
        } catch (error) {
            setError(error.response.data.error);
        }
    }

    const deleteTask = async (userId, taskId) => {
        try {
            const response = await api.delete(`/task/deletetask/${userId}/${taskId}`, `Bearer ${token}`);
            getTasks();
        } catch (error) {
            setError(error.response.data.error);
        }
    }

    const showErrorAlert = (message) => {
        alert(message);
        navigate('/');
    };

    const handleChange = (taskId, value) => {
        setNewDescriptions({
            ...newDescriptions,
            [taskId]: value 
        });
    }
    const onClickCancel = (task) => {
        toggleEditable(task);
        window.location.reload();
    }

    return (
        <>
            <Header />
            <ContainerPage>
               
                <ContainerForm onSubmit={addTask}>
                    <InputText placeholder="Adicionar tarefa" size="57vw" value={description} onChange={(e) => setDescription(e.target.value)} />
                    <AddButton onClick={() => { }}>
                        <Icon />
                    </AddButton>
                </ContainerForm>
                <ContainerTasks>
                    {isLoading ? (
                        <Loading />
                    ) : (
                        tasks.length === 0 ? (
                            <TextPrimary text="Adicione sua primeira tarefa! :)" />
                        ) : (
                            tasks.map((task) => (
                                <ItemTask
                                    key={task.task_id}
                                    onClickEdit={() => toggleEditable(task.task_id)} 
                                    editable={editableTasks[task.task_id] || false} 
                                    onClickDelete={() => deleteTask(userId, parseInt(task.task_id))}
                                    text={task.description}
                                    onClickCancel={() => onClickCancel(task.task_id)} 
                                    inputValue={editableTasks[task.task_id] ? newDescriptions[task.task_id] || '' : task.description}
                                    onChange={(e) => {
                                        if (editableTasks[task.task_id]) {
                                            handleChange(task.task_id, e.target.value);
                                        }
                                    }}
                                    onClickSubmit={() => editTask(userId, parseInt(task.task_id), newDescriptions[task.task_id] )}
                                />
                            ))
                        )
                    )}
                </ContainerTasks>
            </ContainerPage>
        </>
    );
}
