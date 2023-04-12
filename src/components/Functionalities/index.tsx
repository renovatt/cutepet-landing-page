import React from 'react'
import * as S from './style'
import { Card } from '../Card';
import desk from '../../assets/screens.png';

const Functionalities = () => {
    return (
        <S.Container>
            <S.Span>Conheça nossas</S.Span>
            <S.Title>Funcionalidades</S.Title>
            <S.Cards>
                <Card
                    side='left'
                    gif={desk}
                    svg='svg'
                    title='Cadastro de clientes'
                    descrption='Você pode cadastrar seus clientes para manter um controle, campo de busca e informações totalmenete editavel. Você pode cadastrar seus clientes para manter um controle, campo de busca e informações totalmenete editavel.' />

                <Card
                    side='right'
                    gif={desk}
                    svg='svg'
                    title='Cadastro de clientes'
                    descrption='Você pode cadastrar seus clientes para manter um controle, campo de busca e informações totalmenete editavel. Você pode cadastrar seus clientes para manter um controle, campo de busca e informações totalmenete editavel.' />

                <Card
                    side='left'
                    gif={desk}
                    svg='svg'
                    title='Cadastro de clientes'
                    descrption='Você pode cadastrar seus clientes para manter um controle, campo de busca e informações totalmenete editavel. Você pode cadastrar seus clientes para manter um controle, campo de busca e informações totalmenete editavel.' />

                <Card
                    side='right'
                    gif={desk}
                    svg='svg'
                    title='Cadastro de clientes'
                    descrption='Você pode cadastrar seus clientes para manter um controle, campo de busca e informações totalmenete editavel. Você pode cadastrar seus clientes para manter um controle, campo de busca e informações totalmenete editavel.' />
            </S.Cards>
        </S.Container>
    )
}

export default Functionalities;