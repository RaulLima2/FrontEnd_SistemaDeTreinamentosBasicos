import { NextPage } from 'next';
import React from 'react';
import Header from '../../components/Header';
import { DivStyled } from './style';

const Nivel: NextPage = () => (
  <>
    <Header />

    <DivStyled>
      <img src="/images/nivel/iniciante.png" />
      <img src="/images/nivel/intermediario.png" />
      <img src="/images/nivel/avançado.png" />
    </DivStyled>
  </>
);
export default Nivel