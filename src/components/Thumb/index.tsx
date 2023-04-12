import React from 'react'
import * as S from './style'
import { ImGithub } from 'react-icons/im'
import desk from '../../assets/screens.png'
import Image from 'next/image'

const Thumb = () => {
    return (
        <S.Content>
            <S.Title>Conheça o <S.Span>CutePet</S.Span>, o seu sistema de agentamentos para Pets.</S.Title>
            <S.Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates amet eaque fugiat soluta id corporis reiciendis. Nemo, cumque atque tempore amet obcaecati, soluta, et dolor eveniet doloremque provident a doloribus!</S.Text>

            <S.ButtonContent>
                <S.Button href={'#'}>CutePet</S.Button>
                <S.Github href={'#'}>Github<ImGithub /></S.Github>
            </S.ButtonContent>

            <S.DeskContent>
                <Image src={desk} alt={'desk-image'} />
            </S.DeskContent>
        </S.Content>
    )
}

export default Thumb;