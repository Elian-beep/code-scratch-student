import React, { useState, useEffect } from "react";
import { useTheme } from "../../ThemeProvider";
import { ButtonTheme } from "../../components/ButtonTheme";
import { DivContainer } from './styledHome';
import { color } from "../../styles/colors";

export const Home: React.FC = () => {
    const { isDarkMode } = useTheme();

    return (
        <DivContainer isDark={isDarkMode} >
            <div>{isDarkMode ? 'in mode dark' : 'in mode light'}</div>
            <ButtonTheme colorDark={color.light.white} colorLight={color.pattern.orange} />
        </DivContainer>
    );
}