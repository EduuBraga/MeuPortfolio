import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from '../../Provider/ThemesProvider/index';

import KeyboardAndCoffeImgURL from '../../assets/keyboardandcoffe.jpg';
import LogoLinkedinImgURL from '../../assets/icons/linkedin.png';
import LogoGitHubImgURL from '../../assets/icons/logo-github.png';
import LogoLinkedinDarkImgURL from '../../assets/icons/linkedin-dark.png';
import LogoGitHubDarkImgURL from '../../assets/icons/logo-github-dark.png';
import LogoGitHubsecondaryImgURL from '../../assets/icons/logo-github-secondary.png';
import LogoLinkedinsecondaryImgURL from '../../assets/icons/linkedin-secondary.png';

import { ContainerAbout, ContainerAboutBottom, CardImgsAndSocial, SocialMedia, SocialMedia768, PalavrasSection, Text, ImgCoffe } from "./styles";

export function AboutMe() {
  const { theme } = useContext(ThemeContext);

  const [soonGitHub, setSoonGitHub] = useState(false);
  const [soonLinkedin, setSoonLinkedin] = useState(false);
  const [palavra, setPalavra] = useState({ palavra: 'Disposto.' });

  const palavras = [
    'disposto.',
    'otimista.',
    'criativo.',
    'dedicado.',
  ];

  useEffect(() => {
    let indexPalavras = 1
    setInterval(() => {
      setPalavra({ palavra: palavras[indexPalavras] })
      if (++indexPalavras === palavras.length) {
        indexPalavras = 0
      }
    }, 4000);
  }, []);

  return (
    <ContainerAbout>
      <h1>Eduardo é um desenvolvedor <PalavrasSection><Text>{palavra.palavra}</Text></PalavrasSection></h1>
      <ContainerAboutBottom>
        <div>
          <p>Olá <span role="img" aria-label="Emoji acenando">👋</span></p>
          <p>Meu nome é Carlos Eduardo Ponciano Braga, tenho 18 anos, moro em Pentecoste (CE), Atualmente "atuo" como Desenvolvedor Front-End.</p>
          <p>Adoro criar coisas, por este motivo a área de Front-End me encantou logo de cara. Desde então, venho me dedicando dia após dia a programação. Sempre buscando evoluir minhas habilidades como desenvolvedor e pessoal.</p>
          <p>Fazer e refazer estilos é o que mais me agrada, pois não tenho dificuldades em da um passo atrás, pra dar dois à frente.</p>
          <SocialMedia>
            <a href="https://github.com/EduuBraga" >
              {soonGitHub ? (
                <img src={LogoGitHubsecondaryImgURL} onMouseOut={() => { setSoonGitHub(false) }} alt="Logo GitHub" />
              ) : (
                theme.title === 'dark' ? (
                  <img src={LogoGitHubImgURL} onMouseOver={() => { setSoonGitHub(true) }} alt="Logo linkedin" />
                ) : (
                  <img src={LogoGitHubDarkImgURL} onMouseOver={() => { setSoonGitHub(true) }} alt="Logo linkedin" />
                )
              )}
            </a>

            <a href="https://www.linkedin.com/in/eduardo-braga-aa0aa922b/" >
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
          </SocialMedia>
        </div>
        <CardImgsAndSocial>
          <ImgCoffe src={KeyboardAndCoffeImgURL} alt="Teclado e café" />
          <SocialMedia768>
            <a href="https://github.com/EduuBraga" >
              {soonGitHub ? (
                <img src={LogoGitHubsecondaryImgURL} onMouseOut={() => { setSoonGitHub(false) }} alt="Logo GitHub" />
              ) : (
                theme.title ==='dark' ? (
                  <img src={LogoGitHubImgURL} onMouseOver={() => { setSoonGitHub(true) }} alt="Logo linkedin" />
                ) : (
                  <img src={LogoGitHubDarkImgURL} onMouseOver={() => { setSoonGitHub(true) }} alt="Logo linkedin" />
                )
              )}
            </a>

            <a href="https://www.linkedin.com/in/eduardo-braga-aa0aa922b/" >
              {soonLinkedin ? ( <img src={LogoLinkedinsecondaryImgURL} onMouseOut={() => { setSoonLinkedin(false) }} alt="Logo linkedin" />) 
              : ( theme.title === 'dark' ? ( <img src={LogoLinkedinImgURL} onMouseOver={() => { setSoonLinkedin(true) }} alt="Logo linkedin" /> ) 
              : ( <img src={LogoLinkedinDarkImgURL} onMouseOver={() => { setSoonLinkedin(true) }} alt="Logo linkedin" /> ))}
            </a>
          </SocialMedia768>
        </CardImgsAndSocial>
      </ContainerAboutBottom>
      <span id="Skills"></span>
    </ContainerAbout>
  );
};