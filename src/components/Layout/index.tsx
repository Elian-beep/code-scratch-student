import { Header } from "components/Header"
import { DivContainer } from "./styledLayout"
import { useTheme } from "ThemeProvider"
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export const Layout = ({ children }: {children?: React.ReactNode}) => {
    const { isDarkMode } = useTheme();
    const navigate = useNavigate();
    const [token, setToken] = useState<string | null>(null);

    const checkTokenStorage = async () => {
        const storedToken = await localStorage.getItem('token');
        if (!storedToken){
          navigate('/l');
          return;
        } 
        setToken(storedToken);
      };
      useEffect(() => {
        checkTokenStorage();
      }, [navigate]);

    return (
        <DivContainer isDark={isDarkMode} >
            <Header />
            <Outlet />
            { children }
        </DivContainer>
    )
}