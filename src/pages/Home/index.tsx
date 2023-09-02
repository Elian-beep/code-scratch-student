import React, { useState, useEffect } from "react";
import { useTheme } from "ThemeProvider";
import { ButtonTheme } from "components/ButtonTheme";
import { DivContainer } from './styledHome';
import { color } from "styles/colors";
import { useNavigate } from 'react-router-dom';
import { TClassroom } from "types/TClassroom";
import { Header } from "components/Header";

export const Home: React.FC = () => {
  
  const { isDarkMode } = useTheme();
  const [token, setToken] = useState<string | null>(null);
  const [classroons, setClassroons] = useState<TClassroom[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    checkTokenStorage();
  }, [navigate]);
  
  const checkTokenStorage = async () => {
    const storedToken = await localStorage.getItem('token');
    if (!storedToken){
      navigate('/l');
      return;
    } 
    setToken(storedToken);
  };
  
  return (
    <DivContainer isDark={isDarkMode} >
      <Header />
    </DivContainer>
  );
}