import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Helvetica', 'Arial', sans-serif;
        line-height: 1.5;
    }

    div {
        display: flex;
        flex-direction: column;
    }
`

export default GlobalStyle