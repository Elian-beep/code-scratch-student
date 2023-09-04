import styled from 'styled-components';
import { color } from 'styles/colors';

interface Props {
    valueDisplay: boolean;
    isDark: boolean;
}

export const DivContainer = styled.div`
    position: relative;
`;

export const ButtonSandwich = styled.button`
    background: none;
    padding: 0;
    outline: none;
    border: none;
    margin: 0;
    cursor: pointer;
    color: ${color.light.white};    
`;

export const DivItensContainer = styled.div<Props>`
    display: ${props => props.valueDisplay ? 'block' : 'none'};
    position: absolute;
    top: 100%;
    right: 40px;
    z-index: 1;

    &::before{
        content: '';
        position: absolute;
        top: 7px;
        background: ${color.light.white};
        left: 120%; /* Isso posiciona a ponta no centro do contêiner */
        transform: translateX(-50%);
        border: transparent;
        border-style: solid;
        border-width: 0 10px 10px; /* Ajuste o tamanho da ponta aqui */
        border-color: 
            ${color.dark.black_mid } 
            ${color.dark.black_mid} 
            ${ props => props.isDark ? color.light.white : color.dark.black_lght} ${color.dark.black_mid};
    }
`;