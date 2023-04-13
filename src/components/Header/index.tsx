import Image from 'next/image';
import React from 'react'
import * as S from './style'
import logo from '../../assets/logo512.png'

const Header = () => {
  return (
    <S.Header>
      <S.Logo>
        <Image src={logo} alt={'logo'} />
      </S.Logo>
      <S.Button href={'https://schedule-petshop-system.vercel.app/'} target='_blank'>CutePet</S.Button>
    </S.Header>
  )
}

export default Header;