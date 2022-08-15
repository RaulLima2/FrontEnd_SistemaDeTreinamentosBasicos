// import { NextPage } from 'next';
import React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Button from '../../components/Button';
import Header from '../../components/Header';
import FormUser from '../../components/FormUser';
import { DivStyle, TitleStyled } from './style';


const Login : NextPage = () => {
    return (
        <>
					<Header />
					<DivStyle>
		        <img src="/images/login/perfil.png" />
		        <TitleStyled>Login</TitleStyled>
						<FormUser />
					</DivStyle>
        </>
    );
}

export default Login