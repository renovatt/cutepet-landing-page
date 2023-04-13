
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
  --max-width: 1100px;
    --background-default: rgb(255,108,21);
    --background-linear: linear-gradient(
        0deg, rgba(255,108,21,0.994014793417367) 0%,
        rgba(232,138,60,1) 14%, rgba(233,255,112,1) 73%);

    --text-dark-color: #252422;
    --text-white-color: #fceade;
    --text-orange-color: #ff6c15;
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
    background-color: transparent;
}

::-webkit-scrollbar{
    width: 6px;
}
::-webkit-scrollbar-track{
    background-color:  var(--text-white-color);
    border-radius: .4rem;
}
::-webkit-scrollbar-thumb{
    background:  var(--text-dark-color);
    border-radius: .4rem;
}

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