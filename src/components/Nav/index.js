import React, { useContext, useState } from "react"
import { ThemeContext } from "../../Provider/ThemesProvider/index"

import SettingsDarkImgURL from '../../assets/icons/settings-dark.png'
import SettingsImgURL from '../../assets/icons/settings.png'
import MoonImgURL from '../../assets/icons/moon.png'
import SunImgURL from '../../assets/icons/sun.png'

import { Container, Logo, NavBar, ContainerSettings, SwitchTheme, SwitchSettings } from "./styles"

export function Nav() {
  const { theme, handleThemes } = useContext(ThemeContext)
  const [themeVisible, setThemeVisible] = useState(false)

  function showThemes() {
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
          <button>
            {theme.title == 'dark' ? (
              <img src={SunImgURL} onClick={handleThemes} alt="ícone de tema" />
            ) : (
              <img src={MoonImgURL} onClick={handleThemes} alt="ícone de tema" />
            )}
          </button>
        </SwitchTheme>

        <SwitchSettings>
          {theme.title == 'dark' ? (
            <img src={SettingsImgURL} onClick={showThemes} alt="Configurações do site" />
          ) : (
            <img src={SettingsDarkImgURL} onClick={showThemes} alt="Configurações do site" />
          )}
        </SwitchSettings>
      </ContainerSettings>
    </Container>
  )
}