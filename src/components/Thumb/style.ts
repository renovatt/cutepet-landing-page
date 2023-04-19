import Link from "next/link";
import styled from "styled-components";

export const Content = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
`

export const Title = styled.h1`
    font-weight: bold;
    text-align: center;
    width: 25rem;
    color: var(--text-secondary-color);

    @media (max-width: 768px) {
        width: 90%;
    }
`

export const Text = styled.p`
     /* font-weight: bold; */
    font-size: 1rem;
    text-align: center;
    width: 35rem;
    margin-top: 2rem;
    color: var(--text-secondary-color);

    @media (max-width: 768px) {
        width: 90%;
    }
`

export const Span = styled.span`
    color: var(--text-primary-color);
`

export const ButtonContent = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 25rem;
    margin-top: 2rem;

    @media (max-width: 768px) {
        width: 90%;
    }
`

export const Button = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 1rem;
    width: 10rem;
    height: 2.5rem;
    border-radius: .4rem;
    color: var(--text-main-color);
    background-color: var( --primary-background);

    &:hover{
        transition: all .3s;
        opacity: .9;
    }
`

export const Github = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 1rem;
    width: 10rem;
    height: 2.5rem;
    border-radius: .4rem;
    color: var(--text-secondary-color);
    background-color: var(--text-main-color);
    border: 1px solid var(--text-secondary-color);

    &:hover{
        transition: all .3s;
        color: var(--text-main-color);
        background: var(--text-secondary-color);
    }

    svg{
        margin-left: .8rem;
    }
`

export const DeskContent = styled.figure`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50rem;
    margin-top: 2rem;

    img{
        width: 100%;
        height: 100%;
        border-radius: .4rem;
        object-fit: contain;
    }

    @media (max-width: 768px) {
        width: 90%;
    }
`