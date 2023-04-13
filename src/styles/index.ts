
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
  --max-width: 1100px;
    --background-default: rgb(255,108,21);
    /* --background-linear: linear-gradient(0deg, rgba(255,108,21,1) 0%, rgba(232,138,60,1) 41%, rgba(221,188,11,1) 73%); */

    /* --background-linear: linear-gradient(0deg, rgba(255,108,21,1) 0%, rgba(232,138,60,1) 41%, rgba(243,222,44,1) 73%); */

    --background-linear: linear-gradient(0deg, rgba(255,108,21,1) 0%, rgba(232,138,60,1) 41%, rgba(233,255,112,1) 73%);

    --background-linear: linear-gradient(0deg, rgba(255,108,21,0.994014793417367) 0%, rgba(232,138,60,1) 14%, rgba(233,255,112,1) 73%);

    --text-dark-color: #252422;
    --text-white-color: #fceade;
}

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: 'Poppins', sans-serif;
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
    display: flex;
    align-items: center;
    justify-content: center;
}

::-webkit-scrollbar{
    width: 6px;
}
::-webkit-scrollbar-track{
    background-color: #fff;
    border-radius: .4rem;
}
::-webkit-scrollbar-thumb{
    background: #101010;
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