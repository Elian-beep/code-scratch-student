import styled from "styled-components";
import { screens } from "styles/breackpoints";
import { color } from "styles/colors";

interface Props {
    show: boolean;
}

export const DivContainer = styled.div<Props>`
    background-color: ${color.pattern.red};
    border-radius: 5px;
    color: ${color.light.white};
    color: white;
    text-align: center;
    padding: 10px;
    position: fixed;
    top: 16px;
    left: 16px;
    right: 0;
    overflow: hidden;
    transition: all .5s ease-in;
    width: ${(props) => props.show ? '70%' : '0%' };

    @media (min-width: ${screens.laptopStr}) {
        top: 32px;
        left: 40%;
        max-width: 350px;
    }
`;

export const DivContent = styled.div`
    width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonClose = styled.button`
    background: none;
    padding: 0;
    margin: 0;
    border: none;
    color: ${color.light.white};
    cursor: pointer;
`;