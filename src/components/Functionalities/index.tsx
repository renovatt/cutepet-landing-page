import React from 'react'
import * as S from './style'
import { Card } from '../Card';
import desk from '../../assets/screens.png';
import { AiFillSchedule } from 'react-icons/ai'
import { MdSpaceDashboard } from 'react-icons/md'
import { FaUserCircle } from 'react-icons/fa'
import { BsPersonVcardFill } from 'react-icons/bs'

const Functionalities = () => {
    return (
        <S.Container>
            <S.Span>Conheça nossas</S.Span>
            <S.Title>Funcionalidades</S.Title>
            <S.Cards>
                <Card
                    side='left'
                    gif={desk}
                    svg={MdSpaceDashboard}
                    title='Visão geral'
                    description='Você pode cadastrar seus clientes para manter um controle, campo de busca e informações totalmenete editavel. Você pode cadastrar seus clientes para manter um controle, campo de busca e informações totalmenete editavel.' />

                <Card
                    side='right'
                    gif={desk}
                    svg={BsPersonVcardFill}
                    title='Cadastro de clientes'
                    description='Você pode cadastrar seus clientes para manter um controle, campo de busca e informações totalmenete editavel. Você pode cadastrar seus clientes para manter um controle, campo de busca e informações totalmenete editavel.' />

                <Card
                    side='left'
                    gif={desk}
                    svg={FaUserCircle}
                    title='Filtro de busca'
                    description='Você pode cadastrar seus clientes para manter um controle, campo de busca e informações totalmenete editavel. Você pode cadastrar seus clientes para manter um controle, campo de busca e informações totalmenete editavel.' />

                <Card
                    side='right'
                    gif={desk}
                    svg={AiFillSchedule}
                    title='Agendamentos'
                    description='Você pode cadastrar seus clientes para manter um controle, campo de busca e informações totalmenete editavel. Você pode cadastrar seus clientes para manter um controle, campo de busca e informações totalmenete editavel.' />
            </S.Cards>
        </S.Container>
    )
}

export default Functionalities;