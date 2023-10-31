import React from "react";
import { DivBarContainer, DivBarContent, DivContainer, DivContent, H2Title, SpanProgress } from "./styledProgressBar";


export const ProgressBar: React.FC = () => {

    return (
        <DivContainer>
            <H2Title>Seu progresso</H2Title>
            <DivContent>
                <DivBarContainer>
                    <DivBarContent></DivBarContent>
                </DivBarContainer>
                <SpanProgress>95%</SpanProgress>
            </DivContent>
        </DivContainer>
    )
}