// import { NextPage } from 'next';
import React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Button from '../../components/Button';
import Header from '../../components/Header';
import FormUser from '../../components/FormUser';
import { DivStyle, TitleStyled } from './style';
import { ExerciciosStyled } from './style';


const grupos_musculares: NextPage = () => {
  return (
    <>
      <Header />
      <DivStyle>
        <TitleStyled>Grupos Musculares</TitleStyled>
        <ExerciciosStyled>Quadríceps</ExerciciosStyled>
        <ExerciciosStyled>Abdominal</ExerciciosStyled>
        <ExerciciosStyled>Tríceps</ExerciciosStyled>
        <ExerciciosStyled>Costas</ExerciciosStyled>
        <ExerciciosStyled>Peitoral</ExerciciosStyled>
        <ExerciciosStyled>Ombros</ExerciciosStyled>
        <ExerciciosStyled>Femorais</ExerciciosStyled>
        <ExerciciosStyled>Trapézio</ExerciciosStyled>
        <ExerciciosStyled>Bíceps</ExerciciosStyled>
      </DivStyle>

    </>
  );
}

export default grupos_musculares