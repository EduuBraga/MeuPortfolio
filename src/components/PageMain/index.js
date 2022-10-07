import React, { useContext } from "react"
import { ThemeProvider } from "styled-components"
import { ThemeContext } from "../../Provider/ThemesProvider"

import { ButtonBG, ButtonNoBG } from "../Button/styles"
import { Nav } from "../Nav/index"
import { AboutMe } from "../AboutMe/index"
import { Skills } from "../Skills/index"
import { ProjectsCarousel } from "../Projects"
import { Contact } from "../Contact"
import { Footer } from "../Footer"
import { GlobalStyle } from "../../Styles/GlobalStyles/styles"
import MySelfImgURL from '../../assets/my-self.png'
import MyCV from '../../assets/eduardobraga.CV.pdf'


import { ContainerHome, ContainerHomeTop, ContainerHomeBottom } from "./styles"

export function PageMain() {
  const {theme} = useContext(ThemeContext)

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
                <a href={MyCV} download="EduardoBraga-CV" target="blank">
                  <ButtonBG>Download CV</ButtonBG>
                </a>
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
