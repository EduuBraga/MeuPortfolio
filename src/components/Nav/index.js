import React from "react"

import SettingsImgURL from '../../assets/icons/settings.png'

import { Container, Logo, NavBar } from "./styles"

export function Nav(){
  return(
    <Container>
        <Logo>EB</Logo>
        <NavBar>
          <a href="#Home">Home</a>
          <a href="#AboutMe">About me</a>
          <a href="#Skills">Skills</a>
          <a href="#Contact">Contact</a>
        </NavBar>
        <span> </span>
        <span> </span>
        <span> </span>
        <div>
          <img src={SettingsImgURL} alt="Configurações do site" />
        </div>
      </Container>
  )
}