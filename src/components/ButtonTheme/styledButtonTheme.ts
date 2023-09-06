import styled from 'styled-components';
import { PropsMultiColor } from 'interfaces/IIsDark';

export const Button = styled.button<PropsMultiColor>`
  color: ${(props) => !props.isDark ? props.colorLight : props.colorDark };
  padding: 0;
  background: none;
  border: none;
  outline: none;
  transition: all .3s ease-in;
  cursor: pointer;
`;