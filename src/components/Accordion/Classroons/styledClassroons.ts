import styled from 'styled-components';
import { PropsIsDark } from 'interfaces/IIsDark';
import { color } from 'styles/colors';

export const DivContainer = styled.div`
    padding: 32px 0;
    margin-top: 16px;
    display: flex;
`;

export const DivContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
`;

export const ButtonRedirect = styled.button<PropsIsDark>`
    background: none;
    border: none;
    cursor: pointer;
    color: ${ (props) => props.isDark ? color.light.white : color.pattern.black };
`;

export const PTitle = styled.p`
    margin: 0;
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 12pt;
`;

export const SpanIcon = styled.span`
    font-size: 1px;
`;