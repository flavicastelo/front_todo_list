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
    const [checked, setChecked] = useState({});

   
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
            const newTaskId = response.data.task_id;
            const existingCheckedTask = checkedTasks.find((task) => task.task_id === newTaskId);
            // setChecked(existingCheckedTask ? true : false);
            setDescription('');
            setTasks('');
            // getTasks();
            // setChecked({});
        } catch (error) {
            setError(error.response.data.error);
        }
    }
    useEffect(() => {
        const initialCheckedItems = localStorage.getItem('checkedTasks') ? JSON.parse(localStorage.getItem('checkedTasks')) : {};
        setChecked(initialCheckedItems);
      }, []);
      useEffect(() => {
        localStorage.setItem('checkedTasks', JSON.stringify(checked));
      }, [checked]);
    const toggleEditable = (taskId) => {
        setEditableTasks({
            ...editableTasks,
            [taskId]: !editableTasks[taskId]
        });
    };
    const toggleChecked = (taskId) => {
        setChecked({
            ...checked, 
            [taskId]: !checked[taskId]
        });
        localStorage.setItem('checkedTasks', JSON.stringify(checked));
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
                    <InputText placeholder="Adicionar tarefa" width="57vw" value={description} onChange={(e) => setDescription(e.target.value)} maxLength={24} />
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
                                    task={task}
                                    onClickEdit={() => toggleEditable(task.task_id)}
                                    editable={editableTasks[task.task_id] || false}
                                    onClickDelete={() => deleteTask(userId, parseInt(task.task_id))}
                                    text={task.description}
                                    onClickCancel={() => onClickCancel(task.task_id)}
                                    value={task.description}
                                    inputValue={editableTasks[task.task_id] ? newDescriptions[task.task_id] || '' : task.description}
                                    onChange={(e) => {
                                        if (editableTasks[task.task_id]) {
                                            handleChange(task.task_id, e.target.value);
                                        }
                                    }}
                                    onClickSubmit={() => editTask(userId, parseInt(task.task_id), newDescriptions[task.task_id])}
                                    toggleChecked={()=> toggleChecked(task.task_id)}
                                    checked={checked[task.task_id] || false}
                                />
                            ))
                        )
                    )}
                </ContainerTasks>
            </ContainerPage>
        </>
    );
}
