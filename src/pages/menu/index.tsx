import { NextPage } from 'next';
import React from 'react';
import Button from '../../components/Button';
import Header from '../../components/Header';
import { ContainerStyle, DivMenu, DivMenuMain } from './style';

const Menu: NextPage = () => (
	
  <>
    <Header />

    <ContainerStyle>
      <img src="/images/login/perfil.png" />
      <p>Name Usuário</p>

      <DivMenuMain>
        <DivMenu>Minha conta</DivMenu>
        <DivMenu>Avaliação Física</DivMenu>
        <DivMenu>Meu Treino</DivMenu>
        <DivMenu>Gerenciar Treinamento</DivMenu>
        <DivMenu>Minha Evolução</DivMenu>
      </DivMenuMain>

      <Button texto={"Sair"} />
    </ContainerStyle>
  </>
);
export default Menu