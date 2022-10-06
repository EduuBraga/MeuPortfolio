import React, { useContext, useState } from "react"
import { ThemeContext } from "../../Provider/ThemesProvider/index"

import SettingsDarkImgURL from '../../assets/icons/settings-dark.png'
import SettingsImgURL from '../../assets/icons/settings.png'
import MoonImgURL from '../../assets/icons/moon.png'
import SunImgURL from '../../assets/icons/sun.png'
import CloseImgURL from '../../assets/icons/close.png'
import CloseDarkImgURL from '../../assets/icons/close-dark.png'
import MenuImgURL from '../../assets/icons/menu.png'
import MenuDarkImgURL from '../../assets/icons/menu-dark.png'

import { Container, Logo, NavBar, ContainerSettings, SwitchTheme, SwitchSettings, ContainerMenu, IconMenu, ButtonClose } from "./styles"

export function Nav() {
  const { theme, handleThemes } = useContext(ThemeContext)
  const [themeVisible, setThemeVisible] = useState(false)
  const [menuVisible, setMenuVisible] = useState(false)

  function showThemes() {
    themeVisible === true ? setThemeVisible(false) : setThemeVisible(true)
  }

  return (
    <Container>
      <ContainerMenu menuItIsVisible={menuVisible}>
        <ButtonClose onClick={() => { setMenuVisible(false) }}>
          {theme.title === 'dark' ? (
            <img src={CloseImgURL} alt="Fechar menu" />
          ) : (
            <img src={CloseDarkImgURL} alt="Fechar menu" />
          )}
        </ButtonClose>

        <nav>
          <a href="#Home">Home</a>
          <a href="#AboutMe">About me</a>
          <a href="#Skills">Skills</a>
          <a href="#Contact">Contact</a>
        </nav>

        <div>
          <button>
            {theme.title === 'dark' ? (
              <img src={SunImgURL} onClick={handleThemes} alt="ícone de tema" />
            ) : (
              <img src={MoonImgURL} onClick={handleThemes} alt="ícone de tema" />
            )}
          </button>
        </div>
      </ContainerMenu>

      {theme.title === 'dark' ? (
        <IconMenu onClick={() => { setMenuVisible(true) }} src={MenuImgURL} alt="Ícone do menu" />
      ) : (
        <IconMenu onClick={() => { setMenuVisible(true) }} src={MenuDarkImgURL} alt="Ícone do menu" />
      )}

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
            {theme.title === 'dark' ? (
              <img src={SunImgURL} onClick={handleThemes} alt="ícone de tema" />
            ) : (
              <img src={MoonImgURL} onClick={handleThemes} alt="ícone de tema" />
            )}
          </button>
        </SwitchTheme>

        <SwitchSettings>
          {theme.title === 'dark' ? (
            <img src={SettingsImgURL} onClick={showThemes} alt="Configurações do site" />
          ) : (
            <img src={SettingsDarkImgURL} onClick={showThemes} alt="Configurações do site" />
          )}
        </SwitchSettings>
      </ContainerSettings>
    </Container>
  )
}