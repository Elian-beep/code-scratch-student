import React from "react";
import { useNavigate } from 'react-router-dom';
import { UlContainer, LiContent, ButtonItem } from "./styledItens";
import { useTheme } from "ThemeProvider"

export const Itens: React.FC = () => {

    const { isDarkMode } = useTheme();

    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('student');
        navigate('/l');
    }
    
    const redirectPage = (route: string, id?: string) => {
        if(route === 'l'){
            localStorage.removeItem('token');
            localStorage.removeItem('student');
        }
        navigate(`/${route}`);
    }

    return (
        <UlContainer isDark={isDarkMode} >
            <LiContent>
                <ButtonItem onClick={() => redirectPage('')} isDark={isDarkMode}>
                    Aulas
                </ButtonItem>
            </LiContent>
            <LiContent>
                <ButtonItem onClick={() => redirectPage('p')} isDark={isDarkMode}>
                    Meu perfil
                </ButtonItem>
            </LiContent>
            <LiContent>
                <ButtonItem onClick={() => redirectPage('l')} isDark={isDarkMode}>
                    Sair
                </ButtonItem>
            </LiContent>
        </UlContainer>
    )
}