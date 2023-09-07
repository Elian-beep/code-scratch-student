import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getClassroonById } from "services/endpoints";
import { TClassroom } from "types/TClassroom";
import { useTheme } from "ThemeProvider";
import { ButtonShowMore, DivBoxMaterial, DivContainer, DivOverlay, DivText } from "./styledBoxMaterial";

interface Props {
    materialText: string | undefined;
}

export const BoxMaterial: React.FC<Props> = ({ materialText }) => {
    const [showFullText, setShowFullText] = useState(false);
    const { isDarkMode } = useTheme();

    const toggleText = () => {
        setShowFullText(!showFullText);
    };

    return (
        <DivContainer>
            <DivBoxMaterial showFullText={showFullText} >
                <DivText>
                    {materialText}
                    {materialText}
                    {materialText}
                    {materialText}
                    {materialText}
                    {materialText}
                </DivText>
                <DivOverlay showFullText={showFullText} isDark={isDarkMode} />
            </DivBoxMaterial>
            <ButtonShowMore showFullText={showFullText} onClick={toggleText}>
                {showFullText ? 'Ver menos' : 'Ver mais'}
            </ButtonShowMore>
        </DivContainer>
    );
}