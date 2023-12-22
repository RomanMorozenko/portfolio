import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }

    body {
        font-family: 'Barlow Semi Condensed', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color:${theme.colors.font};
        width:100vw;
        overflow-x:hidden;
    }

    ol, ul {
	    list-style: none;
    }

    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    a {
        text-decoration: none;
    }

    section:first-of-type{
        padding-top:70px;
    }

    section:nth-of-type(3) {
        background-color:${theme.colors.primary}
    }

    /* section:nth-of-type(even) {
        background-color:${theme.colors.secondary}
    } */
`;
