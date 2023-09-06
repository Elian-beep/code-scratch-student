import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getClassroonById } from "services/endpoints";
import { TClassroom } from "types/TClassroom";

export const Classroom: React.FC = () => {
    const { class_id } = useParams();
    const [clasroom, setClassroom] = useState<TClassroom>();
    const navigate = useNavigate();
    
    useEffect(() => {
        const token = localStorage.getItem('token')
        if(token) getClassroon(token);
    }, []);
    
    const getClassroon = async (token: string) => {
        if(class_id != undefined){
            const response = await getClassroonById(token, class_id);
            if(response?.status == 200) setClassroom(response.data);
        }
    }

    return (
        <>
        <div>{class_id}</div>
        <div>{clasroom?.title}</div>
        </>
    );
}