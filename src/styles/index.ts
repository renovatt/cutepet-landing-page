
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
  --max-width: 1100px;
  --font-mono: ui-monospace, Menlo, Monaco, 'Cascadia Mono', 'Segoe UI Mono',
    'Roboto Mono', 'Oxygen Mono', 'Ubuntu Monospace', 'Source Code Pro',
    'Fira Mono', 'Droid Sans Mono', 'Courier New', monospace;
}

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: var(--font-mono);
}

body {
    min-width: 100vw;
    min-height: 100vh;
}


html,
body {
  max-width: 100vw;
  overflow-x: hidden;
}

html {
    scroll-behavior: smooth;
    -webkit-tap-highlight-color: transparent;
}

main{
    /* display: flex; */
    /* justify-content: space-around; */
}

::-webkit-scrollbar{
    width: 6px;
}
::-webkit-scrollbar-track{
    background-color: #fff;
    border-radius: .4rem;
}
::-webkit-scrollbar-thumb{
    background: #ed2f5a;
    border-radius: .4rem;
}

/* ::selection{
    background: transparent;
} */

*, input, button{
    border:0;
    outline:0;
}

input[type='number']::-webkit-inner-spin-button {
  -webkit-appearance: none;
  appearance: none;
}

input[type='number'] {
  -moz-appearance: textfield;
  appearance: textfield;
}

a{
    text-decoration: none;
}

li{
    list-style: none;
}

button{
    cursor:pointer;
}

.animation-fade{
    opacity: 0;
    transform: translateX(-20px);
    animation: fade .3s forwards;

    @keyframes fade{
        to{
        opacity: 1;
        transform: initial;
        }
    }
}
`