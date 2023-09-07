import styled from "@emotion/styled";
import { PropsIsDark } from "interfaces/IIsDark";
import { color } from "styles/colors";

export const DivContainer = styled.div`
    padding: 34px 16px;
`;

export const H2Title = styled.h2<PropsIsDark>`
    margin: 0;
    font-size: 18pt;
    font-weight: 500;
    color: ${(props) => props.isDark ? color.light.white : color.dark.black_dark };
`;

export const H3Title = styled.h3<PropsIsDark>`
    margin: 0;
    font-size: 16pt;
    font-weight: 500;
    color: ${(props) => props.isDark ? color.light.white : color.dark.black_dark };
`;

export const DivClassr = styled.div`
    margin-top: 32px;
    width: 100%;
    height: 255px;
`;

export const DivInfo = styled.div<PropsIsDark>`
    margin: 16px 0;
    color: ${(props) => props.isDark ? color.light.white : color.dark.black_dark };
    display: flex;
    justify-content: space-between;
    font-size: 8pt;
`;