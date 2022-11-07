import React, { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { ThemeContext } from "../../Provider/ThemesProvider";

import { Nav } from "../Nav/index";
import { AboutMe } from "../AboutMe/index";
import { Skills } from "../Skills/index";
import { ProjectsCarousel } from "../Projects";
import { Contact } from "../Contact";
import { Footer } from "../Footer";
import { GlobalStyle } from "../../Styles/GlobalStyles/styles";


import { ContainerHome, ContainerHomeTop, ContainerHomeBottom } from "./styles";
import { FisrtContainer } from "../FisrtContainer";

export function PageMain() {
  const {theme} = useContext(ThemeContext)

  return (
    <ThemeProvider theme={theme}>
        <Nav />

        <main>
          <FisrtContainer />
          <AboutMe />
          <Skills />
          <ProjectsCarousel />
          <Contact />
        </main>

        <Footer />
        <GlobalStyle />
    </ThemeProvider>
  )
};