import axios, { AxiosInstance } from 'axios';

let instance: AxiosInstance;

function getTransport(): AxiosInstance {
    if (!instance) {
        instance = axios.create({
            withCredentials: false,
            headers: {
                Accept: 'application/json',
            },
        });

        instance.interceptors.request.use((config) => {
            config.url = `https://itunes.apple.com/${config.url}`;
            return config;
        });
    }

    return instance;
}

export const transport = getTransport();
