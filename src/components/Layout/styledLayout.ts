import styled from 'styled-components';
import { color } from 'styles/colors';
import { PropsIsDark } from 'interfaces/IIsDark';

export const DivContainer = styled.div<PropsIsDark>`
    min-height: 100vh;
    background-color: ${( props ) => !props.isDark ? color.light.white : color.dark.black_dark};
    color: ${( props ) => !props.isDark ? color.dark.black_dark : color.light.white};
`;