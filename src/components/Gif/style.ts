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

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: .4rem;
    }
`
