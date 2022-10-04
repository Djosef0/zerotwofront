import axios from "axios";

export const axiosInstance = axios.create(
    {
        baseUrl : "https://node-deploy-ecprress-6mts6ha2r-djosef0.vercel.app/api/"
    }
)