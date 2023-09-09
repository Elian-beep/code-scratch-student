import React from "react";
import { DivContainer, DivContent, ImgConstruction, SpanTitle } from "./styledConstruction";
import inConstructionImg from 'assets/27287796_lqr1_x3td_211203.jpg';
import { useTheme } from "ThemeProvider";

export const InConstruction: React.FC = () => {

    const { isDarkMode } = useTheme();

    return (
        <DivContainer>
            <DivContent>
                <SpanTitle >
                    em construção
                </SpanTitle>
                <ImgConstruction src={inConstructionImg} />
            </DivContent>
        </DivContainer>
    );
}