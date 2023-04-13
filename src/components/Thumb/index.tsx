import React from 'react'
import * as S from './style'
import { ImGithub } from 'react-icons/im'
import desk from '../../assets/screens.png'
import Image from 'next/image'

const Thumb = () => {
    return (
        <S.Content>
            <S.Title>Conheça o <S.Span>CutePet</S.Span>, o seu sistema de agentamentos para Pets.</S.Title>
            <S.Text>O Cute Pet é um sistema completo de agendamento de petshop, desenvolvido com a tecnologia Next.js e TypeScript. Com ele, é possível cadastrar clientes e seus pets, bem como agendar atendimentos e atualizar as informações cadastradas a qualquer momento.</S.Text>

            <S.ButtonContent>
                <S.Button
                    href={'https://schedule-petshop-system.vercel.app/'} target='_blank'>CutePet</S.Button>
                <S.Github
                    href={'https://github.com/renovatt/schedule-petshop-system.git'} target='_blank'>Github<ImGithub /></S.Github>
            </S.ButtonContent>

            <S.DeskContent>
                <Image src={desk} alt={'desk-image'} />
            </S.DeskContent>
        </S.Content>
    )
}

export default Thumb;