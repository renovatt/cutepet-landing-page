import React from 'react'
import * as S from './style'
import Image from 'next/image'
import logo from '../../assets/logo512.png'

export const LastThumb = () => {
    return (
        <S.Container>
            <S.Content>
                <S.Logo>
                    <Image src={logo} alt='logo' />
                </S.Logo>

                <S.Title>Conheça agora mesmo</S.Title>
                <S.Span>Totalmente online</S.Span>

                <S.Button href={'https://schedule-petshop-system.vercel.app/'} target='_blank'>CutePet</S.Button>
            </S.Content>
        </S.Container>
    )
}
