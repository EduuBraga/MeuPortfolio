import React from "react";

import { projectsFiles } from "../../Services/projects";
import { ButtonBG } from "../Button/styles";

import { CardProjects } from "./style";

export function Projects() {
  return (
    <>
      {projectsFiles.map((project, index) =>
        <CardProjects key={index}>
          <div>
            <a href={project.deploy} ><img src={project.img} alt="Imagem do projeto" /></a>
          </div>
          <h3>{project.name}</h3>
          <div>
            <span>{index + 1 < 10 ? (`0${index + 1}`) : (`${index + 1}`)}</span>
            <a href={project.repo} ><ButtonBG>Repositório</ButtonBG></a>
          </div>
        </CardProjects>
      )}
    </>
  )
}