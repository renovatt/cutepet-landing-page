import React from 'react'
import * as S from './style';
import Image, { StaticImageData } from 'next/image';

type ImageProps = {
    gif: StaticImageData;
}

export const Gif = ({ gif }: ImageProps) => {
    return (
        <S.Container className='animation-fade'>
            <S.Content>
                <Image src={gif} alt='gif' />
            </S.Content>
        </S.Container>
    )
}
