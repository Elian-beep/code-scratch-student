import styled from "@emotion/styled";
import { PropsIsDark } from "interfaces/IIsDark";
import { color } from "styles/colors";

interface Props extends PropsIsDark {
    showFullText: boolean;
}

export const DivContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2em;
`;

export const DivBoxMaterial = styled.div<Props>`
    margin-top: 32px;
    
    position: relative;
    max-height: ${(props) => props.showFullText ? 'none' : '100px'};
    overflow: hidden;
    `

export const DivText = styled.div`
    font-family: 'Adamina', serif;
    text-align: justify;
    position: relative;
`;

export const DivOverlay = styled.div<Props>`
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 130px;
  display: ${(props) => props.showFullText ? 'none' : 'block' };
  background: ${(props) => props.isDark ?
  'linear-gradient(rgba(255, 255, 255, 0), rgba(30, 30, 30, 1))' :
  'linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 1))' };
  pointer-events: none;
`;

export const ButtonShowMore = styled.button<Props>`
    padding: 16px;
    border: none;
    background: ${color.pattern.orange};
    color: ${color.pattern.gray_light};
    font-weight: 600;
    font-size: 12pt;
    border-radius: 5px;
`;