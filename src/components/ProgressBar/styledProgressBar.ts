import styled from 'styled-components';
import { screens } from 'styles/breackpoints';
import { color } from 'styles/colors';
import { PropsIsDark } from "interfaces/IIsDark";

interface Props {
    perAssisted: number | undefined;
}

export const DivContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    max-width: 688.5px;
`;

export const H2Title = styled.h2<PropsIsDark>`
    color: ${(props => props.isDark ? color.light.white : color.dark.black_dark)};
    font-family: Montserrat;
    font-size: 24px;
    font-weight: 500;
`;

export const DivContent = styled.div`
    display: flex;  
    justify-content: space-between;
    width: 100%;
`;

export const DivBarContainer = styled.div`
    width: 80%;
    border-radius: 50px;
    background: ${color.light.white};
    box-shadow: 0px 0px 3px 1px #F9A41E;
    height: 16px;
    padding: 3px 4px;

    @media (min-width: ${screens.laptopStr}) {
        width: 90%;
    }
`;

export const DivBarContent = styled.div<Props>`
    width: ${(props) => props.perAssisted ? `${props.perAssisted}%` : '0%'};
    height: 100%;
    border-radius: 50px;
    background: var(--Azul, #25AFF4);;
`;

export const SpanProgress = styled.span<PropsIsDark>`
    color: ${(props => props.isDark ? color.light.white : color.dark.black_dark)};
    font-family: Montserrat;
    font-size: 18px;
    font-weight: 600;
`;