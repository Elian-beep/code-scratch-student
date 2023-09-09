import React from "react";
import { useNavigate } from 'react-router-dom';
import { UlContainer, LiContent, ButtonItem } from "./styledItens";
import { useTheme } from "ThemeProvider"

interface Props{
    closeMenu: () => void
}

export const Itens: React.FC<Props> = ({closeMenu}) => {

    const { isDarkMode } = useTheme();

    const navigate = useNavigate();
    
    const redirectPage = (route: string, id?: string) => {
        if(route === 'l'){
            localStorage.removeItem('token');
            localStorage.removeItem('student');
        }
        navigate(`/${route}`);
        closeMenu();
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