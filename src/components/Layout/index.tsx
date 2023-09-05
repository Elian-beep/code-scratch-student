import { Header } from "components/Header"
import { DivContainer } from "./styledLayout"
import { useTheme } from "ThemeProvider"
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCategory } from "CategoryProvider";
import { useToken } from "TokenProvider";

export const Layout = ({ children }: { children?: React.ReactNode }) => {
  const { isDarkMode } = useTheme();
  const { addCategories } = useCategory();
  const navigate = useNavigate();

  const { token, addToken } = useToken();
  const storageToken = localStorage.getItem('token');

  if (storageToken) {
    addToken(storageToken);
    addCategories(token);
  }

  useEffect(() => {
    if(!storageToken) navigate('/l')
  }, [navigate]);

  return (
    <DivContainer isDark={isDarkMode} >
      <Header />
      <Outlet />
      {children}
    </DivContainer>
  )
}