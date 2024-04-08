const isLogged = localStorage.getItem('token') !== null;
const login = (token) => localStorage.setItem('token', token);
const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user_id');
};
const setIdUser = (user_id) => localStorage.setItem('user_id', user_id);
const setIdTask = (task_id) => localStorage.setItem('task_id', task_id);

export {isLogged, login, logout, setIdTask, setIdUser};