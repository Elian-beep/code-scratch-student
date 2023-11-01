import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createRelationAssisted, getClassroonById } from "services/endpoints";
import { TClassroom } from "types/TClassroom";
import { DivClassr, DivContainer, DivInfo, DivOnlyCenter, H2Title, H3Title } from "./styledClassroom";
import { useTheme } from "ThemeProvider";
import { BoxMaterial } from "components/BoxMaterial";

export const Classroom: React.FC = () => {
    const { class_id } = useParams();
    const { isDarkMode } = useTheme();
    const [clasroom, setClassroom] = useState<TClassroom>();
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token')
        const idStudent = localStorage.getItem('student');
        if (token && idStudent) getClassroon(token, idStudent);
    }, []);

    const getClassroon = async (token: string, id_student: string) => {
        if (class_id !== undefined) {
            const response = await getClassroonById(token, class_id);
            if(response === 401){
                localStorage.removeItem('token');
                localStorage.removeItem('student');
                localStorage.removeItem('photo');
                navigate('/l');
                return;
            }
            const relation = await createRelationAssisted(token, id_student, class_id);
            console.log(relation);
            setClassroom(response);
        }
    }

    return (
        <DivContainer>
            <H2Title isDark={isDarkMode} >{clasroom?.title}</H2Title>
            <DivOnlyCenter>
                <DivClassr>
                    <iframe
                        src={`https://www.youtube.com/embed/${clasroom?.link_video}`}
                        width="100%"
                        height="100%"
                        allowFullScreen
                        frameBorder={0}
                    ></iframe>
                </DivClassr>
                <DivInfo isDark={isDarkMode} >
                    <span>
                        Instrutor(a): {clasroom?.instructor.name}
                    </span>
                    <span>
                        Módulo: {clasroom?.category.description}
                    </span>
                </DivInfo>
            </DivOnlyCenter>
            <H3Title isDark={isDarkMode} >Material de apoio: </H3Title>
            <BoxMaterial materialText={clasroom?.description} />
        </DivContainer>
    );
}