import styled from 'styled-components';
import { color } from 'styles/colors';
import { PropsIsDark } from 'interfaces/IIsDark';
import { screens } from 'styles/breackpoints';

export const DivContainer = styled.div<PropsIsDark>`
    background-color: ${(props) => !props.isDark ? color.light.white : color.dark.black_dark };
    height: 100vh;
`;

export const DivHeader = styled.div`
    padding: 24px 16px 0 0;
    text-align: right;

    `;

export const DivContent = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 2em;
    gap: 6em;
    align-items: center;
    
    @media (min-width: ${screens.laptopStr}) {
        gap: 1em;
    }

    @media (min-width: ${screens.desktopStr}){
        gap: 2em;
    }
`;

export const PTitle = styled.p`
    margin: 0;
    padding-bottom: 1em;
    font-weight: 600;
    font-size: 14pt;
`;

export const FormLogin = styled.form<PropsIsDark>`
    margin: auto 2em;
    background-color: ${color.light.white};
    padding: 40px 24px 48px 24px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2em;
    box-shadow: ${(props) => props.isDark ? undefined : '0px 0px 8px 0px rgba(0, 0, 0, 0.25);'};
    border-top: 9px solid ${color.pattern.orange};

    @media (min-width: ${screens.desktopStr}) {
        width: 20em;
        padding: 30px;
    }
`;