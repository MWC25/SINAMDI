import axios from 'axios';

// const baseURL = process.env.NEXT_PUBLIC_API_URL!;

const baseURL =
    typeof window !== 'undefined'
        ? '/api/_proxy'
        : process.env.NEXT_PUBLIC_API_URL!;

export const client = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});

client.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (
            error.response &&
            error.response.status === 401 &&
            typeof window !== 'undefined'
        ) {
            window.location.href = '/auth/login';
        }

        return Promise.reject(error);
    }
);
