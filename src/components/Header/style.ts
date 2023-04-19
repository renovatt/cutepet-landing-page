import styled from "styled-components";
import Link from "next/link";

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: var(--max-width);
    width: 100%;
    height: 10rem;
    color: var(--text-main-color);
    padding: 0 6rem;
    margin-bottom: 2rem;

    @media (max-width: 768px) {
        padding: 0 1rem;
    }
`

export const Logo = styled.figure`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90px;
    height: 90px;
    border-radius: 50%;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
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