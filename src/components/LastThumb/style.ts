import Link from "next/link";
import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    height: 25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 2rem;
`

export const Content = styled.section`
    width: 90%;
    height: 30rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 2rem;
    background-color: #fff;
    border-radius: .4rem;
`

export const Logo = styled.figure`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90px;
    height: 90px;
    border-radius: 50%;
    margin-bottom: 2rem;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

export const Title = styled.h1`
    font-weight: bold;
    text-align: center;
    color: #ff6c15;
`

export const Span = styled.span`
    font-weight: bold;
    text-align: center;
    font-size: .8rem;
    text-transform: uppercase;
    color: #101010;
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
    color: #fff;
    margin-top: 2rem;
    background: var(--background-default);

    &:hover{
        transition: all .3s;
        opacity: .9;
    }
`