import { useTheme } from "ThemeProvider";
import { useState } from 'react';
import { DivWrapper, DivHeaderWrapper, SpanIconWrapper, DivBodyWrapper, DivHeaderItens } from "./styledAccordion";
import { ExpandMore } from "@mui/icons-material";
import { TCategory } from "types/TCategory";

export const Accordion: React.FC<TCategory> = ({ id, description }) => {
    const { isDarkMode } = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    }

    return (
        <DivWrapper isDark={isDarkMode} >

            <DivHeaderWrapper onClick={toggleAccordion}>
                <DivHeaderItens>
                    <p>{description}</p>
                    <SpanIconWrapper isOpen={isOpen} isDark={isDarkMode} >
                        <ExpandMore />
                    </SpanIconWrapper>
                </DivHeaderItens>
            </DivHeaderWrapper>

            <DivBodyWrapper isOpen={isOpen} >
            </DivBodyWrapper>

        </DivWrapper>
    );
}