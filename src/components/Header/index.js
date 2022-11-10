import React, { useContext, useState, useRef, useEffect } from "react";
import { ThemeContext } from "../../Provider/ThemesProvider/index";

import SettingsDarkImgURL from '../../../public/icons/settings-dark.png';
import SettingsDarkImgURL from '../../../public/icons/settings-dark.png';
import SettingsImgURL from './../../../public/icons/settings.png';
import MoonImgURL from '../../../public/icons/moon.png';
import SunImgURL from '../../../public/icons/sun.png';
import CloseImgURL from '../../../public/icons/close.png';
import CloseDarkImgURL from '../../../public/icons/close-dark.png';
import MenuImgURL from '../../../public/icons/menu.png';
import MenuDarkImgURL from '../../../public/icons/menu-dark.png';
import audioClose from '../../assets/audios/open.mp3';
import audioOpen from '../../assets/audios/close.mp3';

import { Container, Logo, NavBar, ContainerSettings, SwitchTheme, SwitchSettings, ContainerMenu, IconMenu, ButtonClose, ContentFromTabletAndMobile } from "./styles";

function usePlayerState() {
  const [srcAudio, setSrcAudio] = useState(audioOpen);
  const audio = useRef(null);

  useEffect(() => {
    let playerAudio = audio.current.play();

    if (playerAudio !== undefined) {
      playerAudio.then(_ => {
        playerAudio()
      })
      .catch(error => {
        console.log(error)
      });
    };
  }, [srcAudio]);

  function toggleSrcAudio() {
    srcAudio === audioOpen ? setSrcAudio(audioClose) : setSrcAudio(audioOpen)
  };

  return {
    srcAudio, toggleSrcAudio, audio
  };
}

export function Header() {
  const { theme, handleThemes } = useContext(ThemeContext);
  const { toggleSrcAudio, srcAudio, audio } = usePlayerState();
  
  const [themeVisible, setThemeVisible] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  function showIconThemes() {
    themeVisible === true ? setThemeVisible(false) : setThemeVisible(true)
    toggleSrcAudio()
  };

  function handleThemesAndSrcAudio() {
    handleThemes()
    toggleSrcAudio()
  };

  return (
    <Container>
      <audio preload="true" id="audio" ref={audio} src={srcAudio}></audio>

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
    </Container>
  );
};