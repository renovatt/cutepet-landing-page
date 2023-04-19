
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
  --max-width: 1100px;
    --background-linear: linear-gradient(0deg, rgba(2,73,89,1) 0%, rgba(209,231,224,1) 100%);

    --highlight-color: #d1e7e0;
    --main-background: #ffffff; 
    --primary-background: #fb8500;
    --secondary-background: #024959;
    --alert-background-color: #f94144;

    --text-clean-color: #d1e7e0;
    --text-alert-color: #f01;
    --text-main-color: #ffffff;
    --text-primary-color: #fb8500;
    --text-secondary-color: #024959;
    
    --border-primary-color: #fb8500;
    --border-secondary-color: #024959;
    --border-clean-color: #ccc;

    --input-background-color: #ffffff;

    --modal-input-text-color: #ffffff;
    --modal-label-text-color: #ffffff;
    --modal-input-background-color: #024959;

    --svg-main-color: #ffffff;
    --svg-primary-color: #fb8500;
    --svg-secondary-color: #024959;
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
    /* background-color: var(--highlight-color); */
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
    background-color:  var(--text-main-color);
    border-radius: .4rem;
}
::-webkit-scrollbar-thumb{
    background:  var(--text-secondary-color);
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