import React from "react"

import SettingsImgURL from '../../assets/icons/settings.png'

import { Container, Logo, NavBar } from "./styles"

export function Nav(){
  return(
    <Container>
        <Logo>EB</Logo>
        <NavBar>
          <a href="">Home</a>
          <a href="">About me</a>
          <a href="">Skills</a>
          <a href="">Contact</a>
        </NavBar>
        <div>
          <img src={SettingsImgURL} alt="Configurações do site" />
        </div>
      </Container>
  )
}