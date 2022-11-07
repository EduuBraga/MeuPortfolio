import React, { useContext, useState, useRef, useEffect } from "react";
import { ThemeContext } from "../../Provider/ThemesProvider/index";

import SettingsDarkImgURL from '../../assets/icons/settings-dark.png';
import SettingsImgURL from './../../assets/icons/settings.png';
import MoonImgURL from '../../assets/icons/moon.png';
import SunImgURL from '../../assets/icons/sun.png';
import CloseImgURL from '../../assets/icons/close.png';
import CloseDarkImgURL from '../../assets/icons/close-dark.png';
import MenuImgURL from '../../assets/icons/menu.png';
import MenuDarkImgURL from '../../assets/icons/menu-dark.png';
import audioClose from '../../assets/audios/open.mp3';
import audioOpen from '../../assets/audios/close.mp3';

import { Container, Logo, NavBar, ContainerSettings, SwitchTheme, SwitchSettings, ContainerMenu, IconMenu, ButtonClose, ContentFromTabletAndMobile } from "./styles";

function usePlayerState(){
  const [srcAudio, setSrcAudio] = useState(audioOpen);
  const audio = useRef(null);

  useEffect(()=>{
    audio.current.play()
  }, [srcAudio]);

  function toggleSrcAudio(){
    srcAudio === audioOpen ? setSrcAudio(audioClose) : setSrcAudio(audioOpen)
  };

  return{
    srcAudio, toggleSrcAudio, audio
  }
}

export function Header() {
  const { theme, handleThemes } = useContext(ThemeContext);
  const {toggleSrcAudio, srcAudio, audio} = usePlayerState()
  const [themeVisible, setThemeVisible] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  
  function showIconThemes() {
    themeVisible === true ? setThemeVisible(false) : setThemeVisible(true)
    toggleSrcAudio()
  };

  function handleThemesAndSrcAudio(){
    handleThemes()
    toggleSrcAudio()
  };

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

      </ContainerMenu>

      <ContentFromTabletAndMobile>
        {theme.title === 'dark' ? (
          <IconMenu onClick={() => { setMenuVisible(true) }} src={MenuImgURL} alt="Ícone do menu" />
        ) : (
          <IconMenu onClick={() => { setMenuVisible(true) }} src={MenuDarkImgURL} alt="Ícone do menu" />
        )}

        <div>
          <button>
            {theme.title === 'dark' ? (
              <img src={SunImgURL} onClick={handleThemesAndSrcAudio} alt="ícone de tema" />
            ) : (
              <img src={MoonImgURL} onClick={handleThemesAndSrcAudio} alt="ícone de tema" />
            )}
          </button>
        </div>
      </ContentFromTabletAndMobile>

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
              <img src={SunImgURL} onClick={handleThemesAndSrcAudio} alt="ícone de tema" />
            ) : (
              <img src={MoonImgURL} onClick={handleThemesAndSrcAudio} alt="ícone de tema" />
            )}
          </button>
        </SwitchTheme>

        <SwitchSettings>
          {theme.title === 'dark' ? (
            <img src={SettingsImgURL} onClick={showIconThemes} alt="Configurações do site" />
          ) : (
            <img src={SettingsDarkImgURL} onClick={showIconThemes} alt="Configurações do site" />
          )}
        </SwitchSettings>
      </ContainerSettings>

      <audio id="audio" ref={audio} src={srcAudio}></audio>

    </Container>
  )
};