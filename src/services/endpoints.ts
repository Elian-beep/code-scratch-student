import axios from "axios";
import api from "./connApi";
import { LOGIN_ENDPOINT, CLASSROONS_ENDPOINT } from "./students";

export const authStudent = async (user: string, password: string) => {
    try {
        const response = await api.post(LOGIN_ENDPOINT, { user, password });
        return response.data;
    }catch(error){
        throw new Error('Erro na requisição POST de login');
    }
}

export const getAllClassroom = async (token: string | null) => {
    try {
        const response = await api.get(CLASSROONS_ENDPOINT, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    }catch(error){
        console.log(`Erro na requisição GET ao buscar aulas: ${error}`);
    }
}