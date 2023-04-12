import React from 'react'
import * as S from './style'
import Thumb from '@/components/Thumb';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Functionalities from '@/components/Functionalities';
import { LastThumb } from '@/components/LastThumb';

const Page = () => {
    return (
        <S.Container>
            <Header />
            <Thumb />
            <Functionalities />
            <LastThumb />
            <Footer />
        </S.Container>
    )
}

export default Page;