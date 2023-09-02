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

    return (
        <UlContainer isDark={isDarkMode} >
            <LiContent>
                <ButtonItem isDark={isDarkMode}>
                    Aulas
                </ButtonItem>
            </LiContent>
            <LiContent>
                <ButtonItem isDark={isDarkMode}>
                    Meu perfil
                </ButtonItem>
            </LiContent>
            <LiContent>
                <ButtonItem isDark={isDarkMode} onClick={logout}>
                    Sair
                </ButtonItem>
            </LiContent>
        </UlContainer>
    )
}