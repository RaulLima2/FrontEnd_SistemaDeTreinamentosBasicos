// import { NextPage } from 'next';
import React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Button from '../../components/Button';
import Header from '../../components/Header';
import FormUser from '../../components/FormUser';
import { DivStyle, TitleStyled } from './style';
import { ExerciciosStyled } from './style';


const exercicios: NextPage = () => {
  return (
    <>
      <Header />
      <DivStyle>
        <TitleStyled>Exercícios</TitleStyled>
        <ExerciciosStyled>Supino Reto</ExerciciosStyled>
        <ExerciciosStyled>Crossover</ExerciciosStyled>
        <ExerciciosStyled>Crucifixo</ExerciciosStyled>
        <ExerciciosStyled>Agachamento Livre
        </ExerciciosStyled>
        <ExerciciosStyled>Extensora</ExerciciosStyled>
        <ExerciciosStyled>Passada</ExerciciosStyled>
        <ExerciciosStyled>Prancha</ExerciciosStyled>
        <ExerciciosStyled>Abdominal</ExerciciosStyled>
        <ExerciciosStyled>Elevação das pernas
        </ExerciciosStyled>
        <ExerciciosStyled>Rosca Direta
        </ExerciciosStyled>
        <ExerciciosStyled>Pulley supinado
        </ExerciciosStyled>
        <ExerciciosStyled>Rosca Concentrada
        </ExerciciosStyled>
      </DivStyle>

    </>
  );
}

export default exercicios