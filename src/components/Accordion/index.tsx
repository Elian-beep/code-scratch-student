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
        // const res = getClassroomByCategory()
    }, []);

    const getClassroons = async () => {
            const response = await getClassroomByCategory(token, id);
            if(response?.status == 200){
                setClassroons(response.data);
            }
            return;
    }

    const classroom: TClassroom = {
        id: 'sdfklghjvsldjk',
        category_id: id,
        title: 'Titulo de teste',
        description: 'Uma breve descrição sobre esta aula',
        link_video: 'https://www.youtube.com/watch?v=dESfgB_UnZM&list=RD1oYJzb4aPhQ&index=5'
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
                    category_id={item.category_id}
                    description={item.description}
                    id={item.id}
                    link_video={item.link_video}
                    title={item.title}
                />)}
            </DivBodyWrapper>

        </DivWrapper>
    );
}