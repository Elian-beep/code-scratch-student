import styled from 'styled-components';
import { color } from '../../styles/colors';
import { PropsMultiColor } from '../../interfaces/IIsDark';

export const Button = styled.button<PropsMultiColor>`
  color: ${(props) => !props.isDark ? props.colorLight : props.colorDark };
  padding: 0;
  background: none;
  border: none;
  transition: all .3s ease-in;
`;