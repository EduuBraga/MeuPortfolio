import React from "react"

import { ButtonBG, ButtonNoBG } from "../Button/styles"
import { Nav } from "../Nav/index"
import { AboutMe } from "../AboutMe/index"
import MySelfImgURL from '../../assets/my-self.png'

import { Container, ContainerHome, ContainerHomeTop, ContainerHomeBottom } from "./styles"


export function PageMain() {
  return (
    <>
      <header>
        <Nav />
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
              <ButtonBG>Download CV</ButtonBG>
              <ButtonNoBG>Entre em contato</ButtonNoBG>
            </div>
          </ContainerHomeBottom>
        </ContainerHome>
      </header>

      <Container>
        <AboutMe />


      </Container>
    </>
  )
}
