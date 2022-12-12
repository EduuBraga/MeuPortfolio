import React, { useContext } from "react";
import { ThemeContext } from '../../Provider/ThemesProvider/index';

import { ImgToggleColor } from '../ImgToggleColor/index.js'

import LogoGitHubImgURL from '../../icons/logo-github.png';
import LogoLinkedinImgURL from '../../icons/linkedin.png';
import EmailImgURL from '../../icons/mail.png';
import LogoGitHubDarkImgURL from '../../icons/logo-github-dark.png';
import LogoLinkedinDarkImgURL from '../../icons/linkedin-dark.png';
import EmailDarkImgURL from '../../icons/mail-dark.png';
import LogoGitHubsecondaryImgURL from '../../icons/logo-github-secondary.png';
import LogoLinkedinsecondaryImgURL from '../../icons/linkedin-secondary.png';
import EmailImgsecondaryURL from '../../icons/mail-secondary.png';

import { Container, SocialMidia, Content } from "./styles";

export function Footer() {
  return (
    <Container>
      <Content>
        <SocialMidia>
          <ImgToggleColor
            link="https://github.com/EduuBraga"
            imgWhite={LogoGitHubImgURL}
            imgDark={LogoGitHubDarkImgURL}
            imgHover={LogoGitHubsecondaryImgURL}
            alt="Logo GitHub"
          />

          <ImgToggleColor
            link="https://www.linkedin.com/in/eduardo-braga-aa0aa922b/"
            imgWhite={LogoLinkedinImgURL}
            imgDark={LogoLinkedinDarkImgURL}
            imgHover={LogoLinkedinsecondaryImgURL}
            alt="Logo LinkedIn"
          />

          <ImgToggleColor
            link="mailto:eduardo.braga467@gmail.com"
            imgWhite={EmailImgURL}
            imgDark={EmailDarkImgURL}
            imgHover={EmailImgsecondaryURL}
            alt="E-mail"
          />
        </SocialMidia>

        <span>|</span>
        <p>Eduardo Braga © 2022</p>
        <span></span>
      </Content>
    </Container>
  );
};