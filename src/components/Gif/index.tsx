import React from 'react'
import * as S from './style';
import Image, { StaticImageData } from 'next/image';

type ImageProps = {
    gif: StaticImageData;
}

export const Gif = ({ gif }: ImageProps) => {
    const handleLoad = (event: React.SyntheticEvent<HTMLImageElement>): void => {
        event.currentTarget.style.opacity = "1";
    }
    return (
        <S.Container className='animation-fade'>
            <S.Content>
                <Image src={gif} alt='gif' onLoad={handleLoad} />
            </S.Content>
        </S.Container>
    )
}
