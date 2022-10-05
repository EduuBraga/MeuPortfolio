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

import { Container } from "./styles"

export function Footer() {
  const [soonGitHub, setSoonGitHub] = useState(false)
  const [soonLinkedin, setSoonLinkedin] = useState(false)
  const [iconEmail, setIconEmail] = useState(false)

  const { theme } = useContext(ThemeContext)

  return (
    <Container>
      <div>
        <a href="https://github.com/EduuBraga" target="_blank">
          {soonGitHub ? (
            <img src={LogoGitHubsecondaryImgURL} onMouseOut={() => { setSoonGitHub(false) }} alt="Logo GitHub" />
          ) : (
            theme.title == 'dark' ? (
              <img src={LogoGitHubImgURL} onMouseOver={() => { setSoonGitHub(true) }} alt="Logo GitHub" />
            ) : (
              <img src={LogoGitHubDarkImgURL} onMouseOver={() => { setSoonGitHub(true) }} alt="Logo GitHub" />
            )
          )
          }
        </a>

        <a href="https://www.linkedin.com/in/eduardo-braga-aa0aa922b/" target="_blank">
          {soonLinkedin ? (
            <img src={LogoLinkedinsecondaryImgURL} onMouseOut={() => { setSoonLinkedin(false) }} alt="Logo linkedin" />
          ) : (
            theme.title == 'dark' ? (
              <img src={LogoLinkedinImgURL} onMouseOver={() => { setSoonLinkedin(true) }} alt="Logo linkedin" />
            ) : (
              <img src={LogoLinkedinDarkImgURL} onMouseOver={() => { setSoonLinkedin(true) }} alt="Logo linkedin" />
            )
          )}
        </a>

        <a href="mailto:chocolate.blindado123@gmail.com" target="_blank">
          {iconEmail ? (
            <img src={EmailImgsecondaryURL} onMouseOut={() => { setIconEmail(false) }} alt="E-mail" />
          ) : (
            theme.title == 'dark' ? (
              <img src={EmailImgURL} onMouseOver={() => { setIconEmail(true) }} alt="E-mail" />
            ) : (
              <img src={EmailDarkImgURL} onMouseOver={() => { setIconEmail(true) }} alt="E-mail" />
            )
          )}
        </a>

        <span>|</span>
        <p>Eduardo Braga © 2022</p>
        <span></span>
      </div>
    </Container>
  )
}