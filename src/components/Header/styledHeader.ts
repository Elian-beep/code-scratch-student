import styled from 'styled-components';
import { screens } from 'styles/breackpoints';
import { color } from 'styles/colors';

export const HeaderContainer = styled.header`
    max-width: 100vw;
    background-color: ${color.dark.black_mid};
    padding: 16px;

    @media (min-width: ${screens.laptopStr}) {
        padding: 0 160px;
    }
`;

export const DivContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const DivLeft = styled.div``;

export const DivRight = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;

    @media (min-width: ${screens.laptopStr}) {
        gap: 24px;
    }
`;

export const ButtonProfile = styled.button`
    background: none;
    border: none;
    padding: none;
    margin: 0;
    outline: none;
    cursor: pointer;
`;

export const ImgProfile = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
`;