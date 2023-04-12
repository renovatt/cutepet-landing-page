import { StaticImageData } from 'next/image'
import { IconType } from 'react-icons'

export type CardTypeProps = {
    title: string;
    description: string;
    svg: IconType;
    gif: StaticImageData;
    side: string;
}

export type Description = {
    title: string;
    description: string;
    svg: IconType;
}