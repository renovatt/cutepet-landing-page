import { ContainerSideProps } from "@/@types";
import styled from "styled-components";

export const Container = styled.section<ContainerSideProps>`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: ${(props) => props.side === 'left' ? 'row' : 'row-reverse'};
    width: 100%;
    height: 30rem;
    margin-top: 2rem;
    /* border-radius: .4rem; */
    /* border: 1px solid var(--text-dark-color); */
    /* background-color: ${(props) => props.side === 'left' ? '#e9ff70' : '#ff6c15'}; */

    @media (max-width: 874px) {
        flex-direction: column;
        margin-top: 4rem;
        height: auto;
        border: none;
        padding: .4rem;
    }
`