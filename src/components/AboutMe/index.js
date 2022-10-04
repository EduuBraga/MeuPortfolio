import React from "react"

import KeyboardAndCoffeImgURL from '../../assets/keyboardandcoffe.jpg'
import { ContainerAbout, ContainerAboutBottom } from "./styles"

export function AboutMe() {
  return (
    <ContainerAbout>
      <h1>Eduardo é um desenvolvedor esforçado.</h1>
      <ContainerAboutBottom>
        <div>
          <p>Olá 👋</p>
          <p>Meu nome é Carlos Eduardo Ponciano Braga, tenho 18 anos, moro em Pentecoste (CE), Atualmente "atuo" como Desenvolvedor Front End.</p>
          <p>Adoro criar coisas, por este motivo o universo Front End me pegou de jeito esse danadinho. Fazer e refazer estilos é uma das coisas que eu mais gosto, pois não tenho dificuldades em da um passo atrás, pra dar dois à frente.</p>
          <p>Desde que decide me dedicar dia após dia a programação, só tive a certeza de que sim! é isso que eu quero pra minha vida. Com isso em mente venho evoluindo minhas habilidades como desenvolvedor, sempre disposto a aprender coisas novas e buscar resoluções de problemas.</p>
        </div>
        <div>
          <img src={KeyboardAndCoffeImgURL} alt="Teclado e café" />
        </div>
      </ContainerAboutBottom>
      <span id="Skills"></span>
    </ContainerAbout>
  )
}