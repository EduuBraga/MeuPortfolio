import React from "react";

import { ButtonBG, ButtonNoBG } from "../Button/styles";
import MySelfImgURL from '../../assets/my-self.png';
import MyCV from '../../assets/eduardobraga.CV.pdf';

import { ContainerHome, ContainerHomeTop, ContainerHomeBottom } from "./style";

export function FisrtContainer() {
  return (
    <ContainerHome>
      <ContainerHomeTop>
        <div>
          <img src={MySelfImgURL} alt="imagem de eduardo braga" />
        </div>
        <div>
          <p>Eduardo</p>
          <p>Braga</p>
        </div>
      </ContainerHomeTop>

      <ContainerHomeBottom>
        <p>Desenvolvedor Front-End</p>
        <div>
          <a href={MyCV} download="EduardoBraga-CV" target="blank">
            <ButtonBG>Download CV</ButtonBG>
          </a>
          <a href="#Contact" >
            <ButtonNoBG>Entre em contato</ButtonNoBG>
          </a>
        </div>
      </ContainerHomeBottom>
      <span id="AboutMe"></span>
    </ContainerHome>
  );
};