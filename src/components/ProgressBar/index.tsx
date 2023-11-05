import React, { useEffect, useState } from "react";
import { DivBarContainer, DivBarContent, DivContainer, DivContent, H2Title, SpanProgress } from "./styledProgressBar";
import { useTheme } from "ThemeProvider";
import { getListClassroonsAssisted } from "services/endpoints";


export const ProgressBar: React.FC = () => {
    const { isDarkMode } = useTheme();
    const [idStudent, setIdStudent] = useState<string | null>();
    const [nAssisted, setNAssisted] = useState<number>();

    useEffect(() => {
        const token = localStorage.getItem('token');
        const idStudent = localStorage.getItem('student');
        if (token) getListAssisted(token, idStudent);
    }, []);

    const getListAssisted = async (token: string, idStudent: string | null) => {
        if(idStudent){
            const response = await getListClassroonsAssisted(token, idStudent);
            if (response === undefined) setNAssisted(0)
            else setNAssisted(response);
            console.log(`Resposta do numero de aulas assistidas: ${response}`);
        }else{
            console.log(`Id do estudante nao econtrado`);
        }
    }

    return (
        <DivContainer>
            <H2Title isDark={isDarkMode} >Seu progresso</H2Title>
            <DivContent>
                <DivBarContainer>
                    <DivBarContent perAssisted={nAssisted} ></DivBarContent>
                </DivBarContainer>
                <SpanProgress isDark={isDarkMode}>{nAssisted}%</SpanProgress>
            </DivContent>
        </DivContainer>
    )
}