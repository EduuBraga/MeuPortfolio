import React, { useState, useContext } from "react";
import { ThemeContext } from '../../Provider/ThemesProvider/index';

import LogoGitHubImgURL from '../../assets/icons/logo-github.png';
import LogoLinkedinImgURL from '../../assets/icons/linkedin.png';
import EmailImgURL from '../../assets/icons/mail.png';
import LogoGitHubDarkImgURL from '../../assets/icons/logo-github-dark.png';
import LogoLinkedinDarkImgURL from '../../assets/icons/linkedin-dark.png';
import EmailDarkImgURL from '../../assets/icons/mail-dark.png';
import LogoGitHubsecondaryImgURL from '../../assets/icons/logo-github-secondary.png';
import LogoLinkedinsecondaryImgURL from '../../assets/icons/linkedin-secondary.png';
import EmailImgsecondaryURL from '../../assets/icons/mail-secondary.png';

import { Container, SocialMidia, Content, HandleImg } from "./styles";

export function Footer() {
  const { theme } = useContext(ThemeContext);

  return (
    <Container>
      <Content>
        <SocialMidia>
          <a href="https://github.com/EduuBraga">
            {theme.title === 'dark' ? (
              <HandleImg>
                <img src={LogoGitHubImgURL} alt="Logo linkedin" />
                <img src={LogoGitHubsecondaryImgURL} alt="Logo GitHub" />
              </HandleImg>
            ) : (
              <HandleImg>
                <img src={LogoGitHubDarkImgURL} alt="Logo linkedin" />
                <img src={LogoGitHubsecondaryImgURL} alt="Logo GitHub" />
              </HandleImg>
            )}
          </a>
          <a href="https://www.linkedin.com/in/eduardo-braga-aa0aa922b/">
            {theme.title === 'dark' ? (
              <HandleImg>
                <img src={LogoLinkedinImgURL} alt="Logo linkedin" />
                <img src={LogoLinkedinsecondaryImgURL} alt="Logo linkedin" />
              </HandleImg>
            ) : (
              <HandleImg>
                <img src={LogoLinkedinDarkImgURL} alt="Logo linkedin" />
                <img src={LogoLinkedinsecondaryImgURL} alt="Logo linkedin" />
              </HandleImg>
            )}
          </a>
          <a href="mailto:eduardo.braga467@gmail.com">
            {theme.title === 'dark' ? (
              <HandleImg>
                <img src={EmailImgURL} alt="E-mail" />
                <img src={EmailImgsecondaryURL} alt="E-mail" />
              </HandleImg>
            ) : (
              <HandleImg>
                <img src={EmailDarkImgURL} alt="E-mail" />
                <img src={EmailImgsecondaryURL} alt="E-mail" />
              </HandleImg>
            )}
          </a>
        </SocialMidia>

        <span>|</span>
        <p>Eduardo Braga © 2022</p>
        <span></span>
      </Content>
    </Container>
  );
};