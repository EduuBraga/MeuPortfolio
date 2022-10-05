import React, { useState } from "react"

import SettingsImgURL from '../../assets/icons/settings.png'
import MoonImgURL from '../../assets/icons/moon.png'
import SunImgURL from '../../assets/icons/sun.png'

import { Container, Logo, NavBar, ContainerSettings, SwitchTheme, SwitchSettings } from "./styles"

export function Nav() {
  const [themeVisible, setThemeVisible] = useState(true)

  function handleThemes(){
    themeVisible === true ? setThemeVisible(false) : setThemeVisible(true)
  }

  return (
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
      <ContainerSettings>
        <SwitchTheme isVisible={themeVisible}>
          <img src={SunImgURL} alt="ícone de tema" />
        </SwitchTheme>

        <SwitchSettings><img src={SettingsImgURL} onClick={handleThemes} alt="Configurações do site" /></SwitchSettings>
      </ContainerSettings>
    </Container>
  )
}