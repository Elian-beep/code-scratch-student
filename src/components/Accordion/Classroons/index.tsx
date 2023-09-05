import { useTheme } from "ThemeProvider";
import { useState } from 'react';
import { ExpandMore, Slideshow } from "@mui/icons-material";
import { TCategory } from "types/TCategory";
import { TClassroom } from "types/TClassroom";
import { ButtonRedirect, DivContainer, DivContent, PTitle, SpanIcon } from "./styledClassroons";
import { useToken } from "TokenProvider";
import { YouTubePlayer } from "react-youtube";
import { useNavigate } from "react-router-dom";

export const Classroons: React.FC<TClassroom> = ({ id, title, description, link_video, category_id }) => {
    const { isDarkMode } = useTheme();
    const navigate = useNavigate();

    const goClassroom = () => {
        navigate(`/c/${id}`);
    }

    return (
        <DivContainer>
            <DivContent>
                <iframe
                    src={`https://www.youtube.com/embed/${link_video}`}
                    title={title}
                    allowFullScreen
                    width={300}
                    height={200}
                ></iframe>
                <ButtonRedirect onClick={goClassroom} isDark={isDarkMode}>
                <PTitle>
                    {title}
                    <SpanIcon>
                        <Slideshow />
                    </SpanIcon>
                </PTitle>
                </ButtonRedirect>
            </DivContent>
        </DivContainer>
    );
}