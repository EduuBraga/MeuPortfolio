import React from "react"

import { ButtonBG, ButtonNoBG } from "../Button/styles"
import { Nav } from "../Nav/index"
import { AboutMe } from "../AboutMe/index"
import { Skills } from "../Skills/index"
import { ProjectsCarousel } from "../Projects"
import { Contact } from "../Contact"
import { Footer } from "../Footer"
import MySelfImgURL from '../../assets/my-self.png'

import {  ContainerHome, ContainerHomeTop, ContainerHomeBottom } from "./styles"

export function PageMain() {
  return (
    <>
      <span id="Home"></span>
      <Nav />
      <header >
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
              <a href="#Contact" target="_blank">
                <ButtonNoBG>Entre em contato</ButtonNoBG>
              </a>
            </div>
          </ContainerHomeBottom>
        </ContainerHome>
        <span id="AboutMe"></span>
      </header>

      <main>
        <AboutMe />
        <Skills />
        <ProjectsCarousel />
        <Contact></Contact>
      </main>

      <Footer />
    </>
  )
}
