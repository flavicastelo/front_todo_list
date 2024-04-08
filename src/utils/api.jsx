import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000/api",
    headers: {
        "Content-type": "application/json"
    }
});

api.interceptors.request.use(async (config) => {
    try {
        //   const token = localStorage.getItem('token');
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjUiLCJpYXQiOjE3MTI1ODg4NjQsImV4cCI6MTcxMjU4OTc2NH0.gfJY-0O_VJ13Zv31lZWDSXUEQfra_JGaL2JeygmxVHM";
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    } catch (error) {
        console.log(error);
    }
});

export default api;