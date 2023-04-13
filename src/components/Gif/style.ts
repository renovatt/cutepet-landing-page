import styled from "styled-components";

export const Container = styled.section`
    display: grid;
`

export const Content = styled.figure`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 350px;
    height: 350px;
    border-radius: .4rem;
    /* box-shadow: 5px 5px 25px rgba(0, 0, 0, 0.25); */
    background-color: var(--text-white-color);

    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
        border-radius: .4rem;
    }

    @media (max-width: 768px) {
        width: 100%;
        height: 100%;
        width: 300px;
        height: 300px;
    }
`
