import axios from "axios";

const service = axios.create();

service.interceptors.request.use((config: any) => {
    const runtime = useRuntimeConfig();

    const baseUrl = runtime.public.baseUrl + "/api/v1";
    config.url = baseUrl;
});

export default service;