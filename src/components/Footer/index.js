import React, { useState, useContext } from "react"
import { ThemeContext } from '../../Provider/ThemesProvider/index'

import LogoGitHubImgURL from '../../assets/icons/logo-github.png'
import LogoLinkedinImgURL from '../../assets/icons/linkedin.png'
import EmailImgURL from '../../assets/icons/mail.png'
import LogoGitHubDarkImgURL from '../../assets/icons/logo-github-dark.png'
import LogoLinkedinDarkImgURL from '../../assets/icons/linkedin-dark.png'
import EmailDarkImgURL from '../../assets/icons/mail-dark.png'
import LogoGitHubsecondaryImgURL from '../../assets/icons/logo-github-secondary.png'
import LogoLinkedinsecondaryImgURL from '../../assets/icons/linkedin-secondary.png'
import EmailImgsecondaryURL from '../../assets/icons/mail-secondary.png'

import { Container, SocialMidia, Content } from "./styles"

export function Footer() {
  const [soonGitHub, setSoonGitHub] = useState(false)
  const [soonLinkedin, setSoonLinkedin] = useState(false)
  const [iconEmail, setIconEmail] = useState(false)

  const { theme } = useContext(ThemeContext)

  return (
    <Container>
      <Content>
        <SocialMidia>
          <a href="https://github.com/EduuBraga" target="_blank" rel="noreferrer">
            {soonGitHub ? (
              <img src={LogoGitHubsecondaryImgURL} onMouseOut={() => { setSoonGitHub(false) }} alt="Logo GitHub" />
            ) : (
              theme.title === 'dark' ? (
                <img src={LogoGitHubImgURL} onMouseOver={() => { setSoonGitHub(true) }} alt="Logo GitHub" />
              ) : (
                <img src={LogoGitHubDarkImgURL} onMouseOver={() => { setSoonGitHub(true) }} alt="Logo GitHub" />
              )
            )
            }
          </a>
          <a href="https://www.linkedin.com/in/eduardo-braga-aa0aa922b/" target="_blank" rel="noreferrer">
            {soonLinkedin ? (
              <img src={LogoLinkedinsecondaryImgURL} onMouseOut={() => { setSoonLinkedin(false) }} alt="Logo linkedin" />
            ) : (
              theme.title === 'dark' ? (
                <img src={LogoLinkedinImgURL} onMouseOver={() => { setSoonLinkedin(true) }} alt="Logo linkedin" />
              ) : (
                <img src={LogoLinkedinDarkImgURL} onMouseOver={() => { setSoonLinkedin(true) }} alt="Logo linkedin" />
              )
            )}
          </a>
          <a href="mailto:chocolate.blindado123@gmail.com" target="_blank" rel="noreferrer">
            {iconEmail ? (
              <img src={EmailImgsecondaryURL} onMouseOut={() => { setIconEmail(false) }} alt="E-mail" />
            ) : (
              theme.title === 'dark' ? (
                <img src={EmailImgURL} onMouseOver={() => { setIconEmail(true) }} alt="E-mail" />
              ) : (
                <img src={EmailDarkImgURL} onMouseOver={() => { setIconEmail(true) }} alt="E-mail" />
              )
            )}
          </a>
        </SocialMidia>

        <span>|</span>
        <p>Eduardo Braga © 2022</p>
        <span></span>
      </Content>
    </Container>
  )
}