import axios from "axios";

export const axiosInstance = axios.create(
    {
        baseUrl : "https://projet.adaptable.app/api/"
    }
)