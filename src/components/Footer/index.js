import React, { useState } from "react"

import LogoGitHubImgURL from '../../assets/icons/logo-github.png'
import LogoLinkedinImgURL from '../../assets/icons/linkedin.png'
import EmailImgURL from '../../assets/icons/mail.png'
import LogoGitHubsecondaryImgURL from '../../assets/icons/logo-github-secondary.png'
import LogoLinkedinsecondaryImgURL from '../../assets/icons/linkedin-secondary.png'
import EmailImgsecondaryURL from '../../assets/icons/mail-secondary.png'

import { Container } from "./styles"

export function Footer() {
  const [soonGitHub, setSoonGitHub] = useState(false)
  const [soonLinkedin, setSoonLinkedin] = useState(false)
  const [iconEmail, setIconEmail] = useState(false)

  return (
    <Container id="Contact">
      <div>
        <a href="https://github.com/EduuBraga" target="_blank">
          {soonGitHub ? (
            <img src={LogoGitHubsecondaryImgURL} onMouseOut={() => { setSoonGitHub(false) }} alt="Logo GitHub" />
          ) : (
            <img src={LogoGitHubImgURL} onMouseOver={() => { setSoonGitHub(true) }} alt="Logo GitHub" />
          )}
        </a>

        <a href="https://www.linkedin.com/in/eduardo-braga-aa0aa922b/" target="_blank">
          {soonLinkedin ? (
            <img src={LogoLinkedinsecondaryImgURL} onMouseOut={() => { setSoonLinkedin(false) }} alt="Logo linkedin" />
          ) : (
            <img src={LogoLinkedinImgURL} onMouseOver={()=>{ setSoonLinkedin(true) }} alt="Logo linkedin" />
          )}
        </a>

        <a href="mailto:chocolate.blindado123@gmail.com" target="_blank">
          {iconEmail ? (
            <img src={EmailImgsecondaryURL} onMouseOut={() => { setIconEmail(false) }} alt="E-mail" />
          ) : (
            <img src={EmailImgURL} onMouseOver={()=>{setIconEmail(true) }} alt="E-mail" />
          )}
        </a>

        <span>|</span>
        <p>Eduardo Braga © 2022</p>
        <span></span>
      </div>
    </Container>
  )
}