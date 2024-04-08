const isLogged = localStorage.getItem('token') !== null;
const login = (token) => localStorage.setItem('token', token);
const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user_id');
    localStorage.removeItem('user_name');
};
const setIdUser = (user_id) => localStorage.setItem('user_id', user_id);
const setIdTask = (task_id) => localStorage.setItem('task_id', task_id);
const setUserName = (name) => localStorage.setItem('user_name', name);

export {isLogged, login, logout, setIdTask, setIdUser, setUserName};