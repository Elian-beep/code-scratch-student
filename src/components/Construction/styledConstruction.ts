import styled from "styled-components";
import { PropsIsDark } from "interfaces/IIsDark";
import { color } from "styles/colors";
import { screens } from "styles/breackpoints";

export const DivContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background: #FFFFFF;
    `;

export const DivContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1em;
    width: 100vw;
    height: 70vh;
`;

export const SpanTitle = styled.span`
    color: ${color.dark.black_dark};
`;

export const ImgConstruction = styled.img`
    max-width: 70vw;
    max-height: 70vh;

    @media (min-width: ${screens.laptopStr}){
        max-width: 600px;
        max-height: 500px;
    }
`;