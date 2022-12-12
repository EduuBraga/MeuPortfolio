import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from '../../Provider/ThemesProvider/index';

import KeyboardAndCoffeImgURL from '../../assets/keyboardandcoffe.jpg';
import LogoLinkedinImgURL from '../../icons/linkedin.png';
import LogoGitHubImgURL from '../../icons/logo-github.png';
import LogoLinkedinDarkImgURL from '../../icons/linkedin-dark.png';
import LogoGitHubDarkImgURL from '../../icons/logo-github-dark.png';
import LogoGitHubsecondaryImgURL from '../../icons/logo-github-secondary.png';
import LogoLinkedinsecondaryImgURL from '../../icons/linkedin-secondary.png';

import {
  ContainerAbout,
  ContainerAboutBottom,
  CardImgsAndSocial,
  SocialMedia,
  SocialMedia768,
  WorksSection,
  TextAnimation,
  ImgCoffe,
  HandleImg
} from "./styles";

export const AboutMe = () => {
  const { theme } = useContext(ThemeContext);

  const [workAnimation, setWorkAnimation] = useState('Disposto.');
  const [indexWorkCurrent, setIndexWorkCurrent] = useState(1);

  const works = ['disposto.', 'otimista.', 'criativo.', 'dedicado.',];

  useEffect(() => {
    setTimeout(() => {
      setIndexWorkCurrent(prev => prev + 1);

      if (indexWorkCurrent >= 4) {
        setIndexWorkCurrent(0);
      }

      setWorkAnimation(works[indexWorkCurrent]);
    }, 4000);
  }, [indexWorkCurrent]);

  return (
    <ContainerAbout>
      <h1>
        Eduardo é um desenvolvedor <WorksSection>
          <TextAnimation> {workAnimation}</TextAnimation>
        </WorksSection>
      </h1>

      <ContainerAboutBottom>
        <div>
          <p>Olá <span role="img" aria-label="Emoji acenando">👋</span></p>
          <p>Meu nome é Carlos Eduardo Ponciano Braga, tenho 18 anos, moro em Pentecoste (CE), Atualmente "atuo" como Desenvolvedor Front-End.</p>
          <p>Adoro criar coisas, por este motivo a área de Front-End me encantou logo de cara. Desde então, venho me dedicando dia após dia a programação. Sempre buscando evoluir minhas habilidades como desenvolvedor e pessoal.</p>
          <p>Fazer e refazer estilos é o que mais me agrada, pois não tenho dificuldades em da um passo atrás, pra dar dois à frente.</p>
          <SocialMedia>
            <a href="https://github.com/EduuBraga" >
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

            <a href="https://www.linkedin.com/in/eduardo-braga-aa0aa922b/" >
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
          </SocialMedia>
        </div>
        <CardImgsAndSocial>
          <ImgCoffe src={KeyboardAndCoffeImgURL} alt="Teclado e café" />
          <SocialMedia768>
            <a href="https://github.com/EduuBraga" >
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

            <a href="https://www.linkedin.com/in/eduardo-braga-aa0aa922b/" >
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
          </SocialMedia768>
        </CardImgsAndSocial>
      </ContainerAboutBottom>
      <span id="Skills"></span>
    </ContainerAbout>
  );
}