import React from 'react'
import * as S from './style'
import { Card } from '../Card';
import all from '../../assets/all.png';
import clients from '../../assets/clients.gif';
import modalPet from '../../assets/modal-pet.gif';
import schedulePet from '../../assets/schedule-pet.gif';
import { AiFillSchedule } from 'react-icons/ai'
import { MdSpaceDashboard, MdPets } from 'react-icons/md'
import { BsPersonVcardFill } from 'react-icons/bs'

const Functionalities = () => {
    return (
        <S.Container>
            <S.Span>Conheça nossas</S.Span>
            <S.Title>Funcionalidades</S.Title>
            <S.Cards>
                <Card
                    side='left'
                    gif={all}
                    svg={MdSpaceDashboard}
                    title='Visão geral'
                    description='Com o Cute Pet, é possível ter uma visão geral dos seus clientes e agendamentos marcados para aquele mês, incluindo os atendimentos do dia e os cancelados do mês.' />

                <Card
                    side='right'
                    gif={clients}
                    svg={BsPersonVcardFill}
                    title='Cadastro de clientes'
                    description='É possível cadastrar e ter uma visão completa dos seus clientes com todos os campos editáveis, um filtro por nome que facilita as buscas por informações. Com essa funcionalidade, você tem controle total podendo gerenciar seus clientes de maneira simples e prática.' />

                <Card
                    side='left'
                    gif={schedulePet}
                    svg={AiFillSchedule}
                    title='Agendamentos'
                    description='Além disso, é possível realizar agendamentos para os Pets e preencher as informações, sendo capaz de selecionar as raças de cães e gatos, marcar para o dia e hora desejada.' />

                <Card
                    side='right'
                    gif={modalPet}
                    svg={MdPets}
                    title='Visão do agendamento'
                    description='Uma das principais vantagens do Cute Pet é a visão completa do agendamento com todos os campos editáveis, um filtro por data que facilita as buscas por informações. Com essa funcionalidade, você tem controle total sobre os agendamentos e pode gerenciar seus clientes e seus pets de maneira simples e prática, garantindo um atendimento de qualidade e fidelizando seus clientes.' />
            </S.Cards>
        </S.Container>
    )
}

export default Functionalities;