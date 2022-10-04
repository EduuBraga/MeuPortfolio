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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur explicabo dicta iure impedit quisquam cumque consequuntur quis earum animi ipsa!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur explicabo dicta iure impedit quisquam cumque consequuntur quis earum animi ipsa!</p>
        </div>
        <div>
          <img src={KeyboardAndCoffeImgURL} alt="Teclado e café" />
        </div>
      </ContainerAboutBottom>
      <span id="Skills"></span>
    </ContainerAbout>
  )
}