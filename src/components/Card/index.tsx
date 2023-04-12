import React from 'react'
import * as S from './style'
import { Gif } from '../Gif'
import { GifDescription } from '../GifDescription'
import { StaticImageData } from 'next/image'

type Description = {
    title: string;
    descrption: string;
    svg: string;
    gif: StaticImageData;
    side: string;
}

export const Card = ({ ...props }: Description) => {
    return (
        <S.Container side={props.side}>
            <Gif gif={props.gif} />
            <GifDescription title={props.title} description={props.descrption} svg={props.svg} />
        </S.Container>
    )
}
