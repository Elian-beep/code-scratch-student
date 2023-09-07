import { TClassroom } from "types/TClassroom";
import api from "./connApi";
import { LOGIN_ENDPOINT, CLASSROONS_ENDPOINT, CATEGORIES_ENDPOINT, CLASSROONS_CATEGORY_ENDPOINT, CLASSROONS_ID_ENDPOINT } from "./students";

export const authStudent = async (user: string, password: string) => {
    try {
        const response = await api.post(LOGIN_ENDPOINT, { user, password });
        return response.data;
    }catch(error){
        throw new Error('Erro na requisição POST de login');
    }
}

export const getAllCategories = async (token: string | null | undefined) => {
    if(!token) return;
    try{
        const response = await api.get(CATEGORIES_ENDPOINT, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    }catch(error){
        console.log(`Erro na requisição GET ao buscar módulos: ${error}`);
    }
}

export const getClassroomByCategory= async (token: string | null, id_category: string) => {
    try {
        const response = await api.get(`${CLASSROONS_CATEGORY_ENDPOINT}/${id_category}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        
        return response;
    }catch(error){
        console.log(`Erro na requisição GET ao buscar aulas por categorias: ${error}`);
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

export const getClassroonById = async (token: string | null, id: string) => {
    try{
        const response = await api.get(`${CLASSROONS_ID_ENDPOINT}/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    }catch(error){
        console.log(`Erro na requisição GET ao buscar aula por id: ${error}`);
    }
}