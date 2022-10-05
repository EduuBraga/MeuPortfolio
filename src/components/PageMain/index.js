import React, { useState } from "react"

import { ButtonBG, ButtonNoBG } from "../Button/styles"
import { Nav } from "../Nav/index"
import { AboutMe } from "../AboutMe/index"
import { Skills } from "../Skills/index"
import { ProjectsCarousel } from "../Projects"
import { Contact } from "../Contact"
import { Footer } from "../Footer"
import { GlobalStyle } from "../../Styles/GlobalStyles/styles"
import MySelfImgURL from '../../assets/my-self.png'

import { ThemeDark } from '../../Styles/Themes/dark'
import { ThemeLight } from '../../Styles/Themes/light'
import { ThemeProvider } from 'styled-components'

import {  ContainerHome, ContainerHomeTop, ContainerHomeBottom } from "./styles"

export function PageMain() {
  const [theme, setTheme] = useState(ThemeDark)

  return (
    <ThemeProvider theme={theme}>
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
              <a href="#Contact" >
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
      <GlobalStyle />
    </ThemeProvider>
  )
}
