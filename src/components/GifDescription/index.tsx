import React from 'react'
import * as S from './style'
import { Description } from '@/@types'

export const GifDescription = ({ ...props }: Description) => {
    return (
        <S.Container>
            <S.Title side={props.side}>{props.title} <S.Svg><S.Icon as={props.svg} /></S.Svg></S.Title>
            <S.Text side={props.side}>{props.description}</S.Text>
        </S.Container>
    )
}
