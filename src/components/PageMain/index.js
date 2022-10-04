import React from "react"

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
              <button>Dowload CV</button>
              <button>Entre em contato</button>
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
