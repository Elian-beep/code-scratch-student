import styled from "@emotion/styled";
import { PropsIsDark } from "interfaces/IIsDark";
import { screens } from "styles/breackpoints";
import { color } from "styles/colors";

export const DivContainer = styled.div`
    padding: 34px 16px;

    @media (min-width: ${screens.laptopStr}) {
        padding: 34px 160px;
    }
`;

export const H2Title = styled.h2<PropsIsDark>`
    margin: 0;
    font-size: 18pt;
    font-weight: 500;
    color: ${(props) => props.isDark ? color.light.white : color.dark.black_dark};
`;


export const DivOnlyCenter = styled.div`
    @media (min-width: ${screens.laptopStr}){
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
`;

export const DivClassr = styled.div`
    margin-top: 32px;
    width: 100%;
    height: 255px;
    
    @media (min-width: ${screens.laptopStr}) {
        width: 700px;
        height: 400px;
    }
`;

export const DivInfo = styled.div<PropsIsDark>`
    margin-top: 16px;
    color: ${(props) => props.isDark ? color.light.white : color.dark.black_dark};
    display: flex;
    justify-content: space-between;
    font-size: 8pt;

    @media (min-width: ${screens.laptopStr}) {
        margin-top: 24px;
        width: 700px;
        font-size: 12pt;
    }
`;

export const H3Title = styled.h3<PropsIsDark>`
    margin: 0;
    margin-top: 40px;
    font-size: 16pt;
    font-weight: 500;
    color: ${(props) => props.isDark ? color.light.white : color.dark.black_dark};
`;