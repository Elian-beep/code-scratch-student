import api from "./connApi";
import { LOGIN_ENDPOINT } from "./students";
import axios from "axios";

export const wakeApi = async () => {
    try{
        const response = await api.get('/');
        if(response.data){
            console.log(response.data);
        }else{
            console.error('Erro ao acordar com /!');
        }
    }catch(error){
        throw new Error(`Falha ao acordar api: ${error}`);
    }
}