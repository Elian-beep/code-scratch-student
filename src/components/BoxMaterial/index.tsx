import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TClassroom } from "types/TClassroom";
import { useTheme } from "ThemeProvider";
import { ButtonShowMore, DivBoxMaterial, DivContainer, DivOverlay, DivText } from "./styledBoxMaterial";
import ReactMarkdown from "react-markdown";

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
                    <ReactMarkdown>
                        {`${materialText}`}
                    </ReactMarkdown>
                </DivText>
                <DivOverlay showFullText={showFullText} isDark={isDarkMode} />
            </DivBoxMaterial>
            <ButtonShowMore showFullText={showFullText} onClick={toggleText}>
                {showFullText ? 'Ver menos' : 'Ver mais'}
            </ButtonShowMore>
        </DivContainer>
    );
}