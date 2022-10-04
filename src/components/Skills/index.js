import React from "react"

import LogoHTMLImgUrl from '../../assets/icons/logo-html5-icon.png'
import LogoCSSImgUrl from '../../assets/icons/logo-css3-icon.png'
import LogoJavascriptImgUrl from '../../assets/icons/logo-javascript-icon.png'
import LogoFigmaImgUrl from '../../assets/icons/logo-figma-icon.png'
import LogoReactImgUrl from '../../assets/icons/logo-react-icon.png'
import LogoGitImgUrl from '../../assets/icons/logo-git-icon.png'
import LogoBootstrapImgUrl from '../../assets/icons/logo-bootstrap-icon.png'
import LogoVsCodeImgUrl from '../../assets/icons/logo-vscode-icon.png'

import { Container, ContainerTop, ContainerBottom } from "./styles"

export function Skills() {
  return (
    <Container>
      <h1>Essas são as Skills de Eduardo</h1>
      <ContainerTop>
        <div>
          <img src={LogoHTMLImgUrl} alt="Logo HTML5" />
          <p>HTML5</p>
        </div>
        <div>
          <img src={LogoCSSImgUrl} alt="Logo CSS3" />
          <p>CSS3</p>
        </div>
        <div>
          <img src={LogoJavascriptImgUrl} alt="Logo JavaScript" />
          <p>JavaScript</p>
        </div>
        <div>
          <img src={LogoFigmaImgUrl} alt="Logo Figma" />
          <p>Figma</p>
        </div>
        <div>
          <img src={LogoReactImgUrl} alt="Logo ReactJS" />
          <p>ReactJS</p>
        </div>
        <div>
          <img src={LogoGitImgUrl} alt="Logo Git" />
          <p>Git/GitHub</p>
        </div>
        <div>
          <img src={LogoBootstrapImgUrl} alt="Logo Bootstrap" />
          <p>Bootstrap</p>
        </div>
        <div>
          <img src={LogoVsCodeImgUrl} alt="Logo Visual studio code" />
          <p>VSCode</p>
        </div>

      </ContainerTop>
      <ContainerBottom>
        <div>
          <p>Essas são as Principais Tecnologias e Ferramentas que me Auxiliam no Desenvolvimento de Aplicações. Fora estás, tenho Conhecimento nas Áreas de:</p>
          <ul>
            <li>Metodologias Ágeis, como Scrum</li>
            <li>Desing System</li>
            <li>Styled-Components</li>
            <li>Redux</li>
            <li>React-Router-Dom</li>
          </ul>
        </div>
      </ContainerBottom>
    </Container>
  )
}