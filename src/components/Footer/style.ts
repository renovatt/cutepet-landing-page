import styled from "styled-components";

export const Footer = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 10rem;
    margin: 0 2rem;
    border-top: 1px solid #fff;
    margin-top: 2rem;

    @media(max-width: 40rem) {
        flex-direction: column;
        margin-bottom: 1rem;
      }
`
export const FooterDescription = styled.div`
    display: flex;
    font-size: 1.2rem;
    font-weight: bold;
    color: #000;
`

export const FooterCopyright = styled.span`
    margin: .2rem;
    font-size: .9rem;
`

export const SocialMedia = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
`

export const FooterLink = styled.a`
    display: flex;
    color: #000;
    align-items: center;
    transition: .2s;
    font-size: .9rem;

    svg{
        height: 25px;
        width: 25px;
        color: #000;
        transition: .2s;
    }

    svg:hover{
        color: #fff;
        transform: scale(1.2);
    }

    &:hover{
        color: #fff;
    }
`