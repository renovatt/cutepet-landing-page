import styled from "styled-components";

type ContainerSideProps = {
    side: string;
}

export const Container = styled.section<ContainerSideProps>`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: ${(props) => props.side === 'left' ? 'row' : 'row-reverse'};
    width: 90%;
    height: 30rem;
    margin-top: 2rem;
    border-radius: .4rem;
    border: 1px solid var(--text-dark-color);

    @media (max-width: 768px) {
        flex-direction: column;
        margin-top: 4rem;
        height: auto;
        border: none;
        padding: .4rem;
    }
`