import React from 'react'
import * as S from './style'
import { Description } from '@/@types'

export const GifDescription = ({ ...props }: Description) => {
    return (
        <S.Container>
            <S.Title>{props.title} <S.Svg><S.Icon as={props.svg} /></S.Svg></S.Title>
            <S.Text>{props.description}</S.Text>
        </S.Container>
    )
}
