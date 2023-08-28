import styled from 'styled-components';
import { color } from '../../styles/colors';
import { PropsIsDark } from '../../interfaces/IIsDark';
import iconScratch from "../../assets/logo/logo_code_scratch.svg";

export const DivContainer = styled.div<PropsIsDark>`
    background-color: ${(props) => !props.isDark ? color.light.white : color.dark.black_dark };
`;

export const ImgLogoScratch = styled.img`
`;