import React, { useEffect, useState } from "react";

import { ImgToggleColor } from '.././ImgToggleColor/index.js'

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
  ContainerSocialMedia,
  ContainerSocialMedia768,
  WorksSection,
  TextAnimation,
  ImgCoffe
} from "./styles";

export const AboutMe = () => {
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
          <p>
            Meu nome é Eduardo Braga, tenho 19 anos e moro em Pentecoste (CE).
            Atualmente atuo como Desenvolvedor Front-End.
          </p>
          <p>
            Sou um rapaz simples e dedicado. Acabei me apaixonando por
            programação, desde então venho me empenhando dia após dia aos
            estudos sobre a mesma. Sempre disposto a aprender coisas novas e
            buscar resoluções de problemas. Buscando constantemente evoluir
            como desenvolvedor e pessoa.
          </p>
          <p>
            Sigo a conduta de que "Primeiro você faz, depois você melhora". Pois
            assim, consigo criar coisas incríveis e depois melhorá-las.
          </p>

          <ContainerSocialMedia>
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
          </ContainerSocialMedia>
        </div>

        <CardImgsAndSocial>
          <ImgCoffe src={KeyboardAndCoffeImgURL} alt="Teclado e café" />

          <ContainerSocialMedia768>
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
          </ContainerSocialMedia768>
        </CardImgsAndSocial>
      </ContainerAboutBottom>

      <span id="Skills"></span>
    </ContainerAbout>
  );
}