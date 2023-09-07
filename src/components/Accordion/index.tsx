import { useTheme } from "ThemeProvider";
import { useEffect, useState } from 'react';
import { DivWrapper, DivHeaderWrapper, SpanIconWrapper, DivBodyWrapper, DivHeaderItens } from "./styledAccordion";
import { ExpandMore } from "@mui/icons-material";
import { TCategory } from "types/TCategory";
import { Classroons } from "components/Accordion/Classroons";
import { TClassroom } from "types/TClassroom";
import { getClassroomByCategory } from "services/endpoints";
import { useToken } from "TokenProvider";

export const Accordion: React.FC<TCategory> = ({ id, description }) => {
    const { isDarkMode } = useTheme();
    const { token } = useToken();
    const [classroons, setClassroons] = useState<TClassroom[]>([]);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        getClassroons();
    }, []);

    const getClassroons = async () => {
            const response = await getClassroomByCategory(token, id);
            if(response?.status == 200){
                setClassroons(response.data);
            }
            return;
    }

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    }

    return (
        <DivWrapper isDark={isDarkMode} >

            <DivHeaderWrapper isDark={isDarkMode} onClick={toggleAccordion}>
                <DivHeaderItens>
                    <p>{description}</p>
                    <SpanIconWrapper isOpen={isOpen} isDark={isDarkMode} >
                        <ExpandMore />
                    </SpanIconWrapper>
                </DivHeaderItens>
            </DivHeaderWrapper>

            <DivBodyWrapper isOpen={isOpen} >
                {classroons.map(item => <Classroons
                    category={item.category}
                    description={item.description}
                    id={item.id}
                    link_video={item.link_video}
                    title={item.title}
                    instructor={item.instructor}
                />)}
            </DivBodyWrapper>

        </DivWrapper>
    );
}