import React from "react";

import LogoLinkedinImgURL from '../../assets/icons/linkedin.png';
import EmailImgURL from '../../assets/icons/mail.png';

import { Container, ContainerContactTop, ContainerContactBottom, CardContainerContactBottom } from "./styles";

export function Contact(){
  return(
    <Container  id="Contact">
      <ContainerContactTop>
        <h1>Entre em Contato comigo</h1>
        <p>Caso tenha interesse em mim, me encaminhe um E-mail ou me chame no Linkedin. Responderei o quanto antes.</p>
      </ContainerContactTop>
      <ContainerContactBottom>
        <CardContainerContactBottom>
          <div>
            <img src={EmailImgURL} alt="E-mail" />
          </div>
          <h4>E-mail</h4>
          <p>eduardo.braga467@gmail.com</p>
          <a href="mailto:eduardo.braga467@gmail.com">Me mande um e-mail</a>
        </CardContainerContactBottom>
        <CardContainerContactBottom>
          <div>
            <img src={LogoLinkedinImgURL} alt="Logo do linkedin" />
          </div>
          <h4>Linkedin</h4>
          <p>Eduardo Braga</p>
          <a href="https://www.linkedin.com/in/eduardo-braga-aa0aa922b/">Me mande um Olá</a>
        </CardContainerContactBottom>
      </ContainerContactBottom>
    </Container>
  );
};
