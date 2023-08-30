import styled from 'styled-components';
import { screens } from 'styles/breackpoints';
import { color } from 'styles/colors';

export const HeaderContainer = styled.header`
    max-width: 100vw;
    background-color: ${color.dark.black_mid};
    padding: 16px;

    @media (min-width: ${screens.desktopStr}) {
        padding-left: 160px;
        padding-right: 160px;
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

    @media (min-width: ${screens.desktopStr}) {
        gap: 24px;
    }
`;

export const ButtonProfile = styled.button`
    background: none;
    border: none;
    padding: none;
    margin: 0;
    outline: none;
`;