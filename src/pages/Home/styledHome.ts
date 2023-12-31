import styled from 'styled-components';
import { screens } from 'styles/breackpoints';

export const DivProgressBar = styled.div`
    width: auto;
    padding: 2em 16px;

    @media (min-width: ${screens.laptopStr}) {
        padding-left: 160px;
    }
`;

export const DivAccordion  = styled.div`
    padding: 3em 16px;
    display: flex;
    flex-direction: column;
    gap: 2em;

    @media (min-width: ${screens.laptopStr}) {
        padding-left: 160px;
        padding-right: 160px;
    }

    @media (min-width: ${screens.desktopStr}) {
        padding-top: 5em;
        padding-bottom: 5em;
        justify-content: space-between;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 4em;
    }
`;