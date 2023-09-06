import { useTheme } from "ThemeProvider"
import { useNavigate } from 'react-router-dom';
import { LiContent, UlContainer, ButtonItem } from "./styledNavList"

export const NavList: React.FC = () => {
    const { isDarkMode } = useTheme();
    const navigate = useNavigate();

    const redirectPage = (route: string, id?: string) => {
        if(route === 'l'){
            localStorage.removeItem('token');
            localStorage.removeItem('student');
        }
        navigate(`/${route}`);
    }


    return (
        <UlContainer>
            <LiContent >
                <ButtonItem onClick={() => redirectPage('')} isDark={isDarkMode}>
                    Aulas
                </ButtonItem>
            </LiContent>
            <LiContent >
                <ButtonItem onClick={() => redirectPage('p')} isDark={isDarkMode}>
                    Meu Perfil
                </ButtonItem>
            </LiContent>
            <LiContent >
                <ButtonItem onClick={() => redirectPage('l')} isDark={isDarkMode}>
                    Sair
                </ButtonItem>
            </LiContent>
        </UlContainer>
    )
}