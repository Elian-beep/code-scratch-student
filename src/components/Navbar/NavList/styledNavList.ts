import styled from "styled-components";
import { PropsIsDark } from "interfaces/IIsDark";
import { color } from "styles/colors";

export const UlContainer = styled.ul`
    display: flex;
    justify-content: left;
    gap: 24px;
    padding-left: 0;
`;

export const LiContent = styled.li`
    list-style: none;
    `;

export const ButtonItem = styled.button<PropsIsDark>`
    padding: 0;
    margin: 0;
    background: none;
    margin: 0;
    border: none;
    font-size: 12pt;
    color: ${color.light.white};
    cursor: pointer;
    transition: all .4s ease;

    &:hover{
        color: ${color.pattern.gray_light};
        font-size: 14pt;
    }
`;