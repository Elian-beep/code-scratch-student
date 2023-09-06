import styled from 'styled-components';
import { color } from 'styles/colors';
import { PropsIsDark } from 'interfaces/IIsDark';
import { screens } from 'styles/breackpoints';

export const UlContainer = styled.ul<PropsIsDark>`
    background-color: ${ props => props.isDark ? color.light.white : color.dark.black_lght};
    display: flex;
    flex-direction: column;
    padding: 16px;
    width: 110%;
    border-radius: 5px;
`;

export const LiContent = styled.li`
    list-style: none;
    width: 100%;
    `;

export const ButtonItem = styled.button<PropsIsDark>`
    color: ${ props => !props.isDark ? color.light.white : color.pattern.black};
    background: none;
    padding: 8px 16px;
    outline: none;
    border: none;
    margin: 0;

    font-size: 12pt;
    font-weight: 400;
`;