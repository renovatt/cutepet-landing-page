import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    width: 25rem;
    margin-top: 2rem;

    @media (max-width: 768px) {
        width: 90%;
        justify-content: center;
        align-items: center;
    }
`

export const Title = styled.h2`
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;

    @media (max-width: 768px) {
        text-align: center;
    }
`

export const Text = styled.p`
    font-weight: bold;
    color: #fff;
    margin-top: 1rem;
    
    @media (max-width: 768px) {
        text-align: center;
        font-size: .8rem;
    }
`

export const Svg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #fff;
    padding: .4rem;
    margin-left: .4rem;
`

export const Icon = styled.p`
    color: #ff6c15;
    width: 2.75rem;
    height: 2.75rem;
`