import React from "react"

import { ButtonBG, ButtonNoBG } from "../Button/styles"
import { Nav } from "../Nav/index"
import { AboutMe } from "../AboutMe/index"
import { Skills } from "../Skills/index"
import { ProjectsCarousel } from "../Projects"
import { Footer } from "../Footer"
import MySelfImgURL from '../../assets/my-self.png'

import {  ContainerHome, ContainerHomeTop, ContainerHomeBottom } from "./styles"

export function PageMain() {
  return (
    <>
      <Nav />
      <header>
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
              <a href="https://www.linkedin.com/in/eduardo-braga-aa0aa922b/" target="_blank">
                <ButtonNoBG>Entre em contato</ButtonNoBG>
              </a>
            </div>
          </ContainerHomeBottom>
        </ContainerHome>
      </header>

      <main>
        <AboutMe />
        <Skills />
        <ProjectsCarousel />
      </main>

      <Footer />
    </>
  )
}
