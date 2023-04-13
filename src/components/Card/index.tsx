import React from 'react'
import * as S from './style'
import { Gif } from '../Gif'
import { GifDescription } from '../GifDescription'
import { CardTypeProps } from '@/@types'

export const Card = ({ ...props }: CardTypeProps) => {
    return (
        <S.Container side={props.side}>
            <Gif gif={props.gif} />
            <GifDescription
                title={props.title}
                description={props.description}
                svg={props.svg}
                side={props.side} />
        </S.Container>
    )
}