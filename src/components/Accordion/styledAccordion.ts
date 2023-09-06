import styled from 'styled-components';
import { PropsIsOpen } from 'interfaces/IIsDark';
import { color } from 'styles/colors';
import { PropsIsDark } from 'interfaces/IIsDark';
import { screens } from 'styles/breackpoints';

export const DivWrapper = styled.div<PropsIsDark>`
    color: ${( props ) => !props.isDark ? color.dark.black_dark : color.light.white};
    
    @media (min-width: ${screens.desktopStr}){
        width: 45%;
    }
    
    `;

export const DivHeaderWrapper = styled.div<PropsIsDark>`
    box-shadow: ${( props ) => !props.isDark ? ' 0px 0px 8px 0px rgba(0, 0, 0, 0.25)' : 'none'};
    background-color: ${( props ) => !props.isDark ? color.light.white  : color.dark.black_lght};
    cursor: pointer;
    border-bottom: 2px solid ${color.pattern.orange};
    font-size: 12pt; 
`;

export const DivHeaderItens = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    font-weight: 400;
`;

export const SpanIconWrapper = styled.span<PropsIsOpen>`
    font-size: 20pt;
    color: ${(props) => props.isDark ? color.light.white : color.pattern.black};
    transition: transform 0.2s ease-in;
    transform: ${ (props) => !props.isOpen ? "rotate(0deg)" : "rotate(180deg)"}; 
`;

export const DivBodyWrapper = styled.div<PropsIsOpen>`
    overflow: hidden;
    overflow-x: scroll;
    display: flex;
    flex-direction: row;
    gap: 1em;
    transition: max-height 0.1s ease-in-out;
    max-height: ${ props => props.isOpen ? "1000px" : "0"};
`;