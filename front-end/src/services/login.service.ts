import { client } from "./axios.config";

export async function loginService(username: string, password: string) {
    const data = await client.post('/auth/login', {
        username,
        password,
    });
    return data;
}

export async function logoutService() {
    const data = await client.post('/auth/logout');
    return data;
}