import styled, { css } from 'styled-components';
import { screens } from 'styles/breackpoints';
import { color } from 'styles/colors';

interface Props {
    hasValue?: string,
    showPassword?: boolean
}

export const DivContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;

export const DivContent = styled.div`
    width: 100%;
    position: relative;
    /* align-self: center; */
`;

export const LabelInput = styled.label<Props>`
    position: absolute;
    pointer-events: none;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    transition: all 0.2s ease-out;
    ${props =>
        props.hasValue && css`
            font-size: 12px;
            top: -10px;
            transform: translateY(0);
        `}
`;

export const InputField = styled.input<Props>`
    padding: 12px;
    font-size: 10pt;
    width: 91%;
    border: none;
    background: none;
    outline: none;
    border-bottom: 2px solid 
        ${props => props.hasValue ? color.pattern.orange : color.pattern.gray_light};
`;

export const ButtonEye = styled.button<Props>`
    padding: none;
    background: none;
    border: none;
    position: absolute;
    right: -10px;
    top: 30%;
    cursor: pointer;
    transition: all .2s ease-in;
    color: ${props => props.showPassword ? color.pattern.orange : color.pattern.gray_light};

    @media (min-width: ${screens.desktopStr}) {
        right: 10px;
    }
`;

export const ButtonSubmit = styled.button`
    width: 100%;
    background: ${color.pattern.orange};
    border: none;
    padding: 16px;
    max-width: 288px;
    border-radius: 5px;
    color: ${color.light.white};
    font-size: 12pt;
    font-weight: 600;
    cursor: pointer;
`;