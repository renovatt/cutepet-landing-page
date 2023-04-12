import React from 'react'
import * as S from './style'

type Description = {
    title: string;
    description: string;
    svg: string;
}

export const GifDescription = ({ ...props }: Description) => {
    return (
        <S.Container>
            <span>{props.svg}</span>
            <S.Title>{props.title}</S.Title>
            <S.Text>{props.description}</S.Text>
        </S.Container>
    )
}
