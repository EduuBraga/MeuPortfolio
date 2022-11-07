import React, { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { ThemeContext } from "../../Provider/ThemesProvider";

import { Header } from "../Header/index";
import { FisrtContainer } from "../FisrtContainer";
import { AboutMe } from "../AboutMe/index";
import { Skills } from "../Skills/index";
import { ProjectsCarousel } from "../ContainerProjects";
import { Contact } from "../Contact";
import { Footer } from "../Footer";
import { GlobalStyle } from "../../Styles/GlobalStyles/styles";

export function PageMain() {
  const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <span id="Home"></span>

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
  );
};