import React from "react";

import { projectsFiles } from "../../Services/projects";
import { ButtonBG } from "../Button/styles";

import {
  CardProjects,
  ContainerTopCard,
  TechsProject,
  ContainerBottomCard,
  NumberToProject
} from "./style";

export function Projects() {
  const numberProject = index => index + 1 < 10 ? `0${index + 1}` : index + 1;

  return (
    <>
      {projectsFiles.map((project, index) =>
        <CardProjects key={index}>
          <ContainerTopCard>
            <a href={project.deploy} >
              <img src={project.img} alt="Imagem do projeto" />
            </a>
          </ContainerTopCard>

          <h3>{project.name}</h3>
          <TechsProject>{project.techs}</TechsProject>

          <ContainerBottomCard>
            <NumberToProject>{numberProject(index)}</NumberToProject>
            <a href={project.repo} ><ButtonBG>Repositório</ButtonBG></a>
          </ContainerBottomCard>
        </CardProjects>
      )}
    </>
  );
}