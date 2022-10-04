import React, { useState } from "react"

import JogoDaVelhaImgURl from '../../assets/ImgsProjects/projeto-jogodavelha.jpg'
import JogoDaMemoriaImgURl from '../../assets/ImgsProjects/projeto-jogodamemoria.jpg'
import CursoMarktingImgURl from '../../assets/ImgsProjects/projeto-cursomarketing.jpg'
import ColdTechImgURl from '../../assets/ImgsProjects/projeto-coldtech.jpg'
import PlaylistDjongaImgURl from '../../assets/ImgsProjects/projeto-playlistdjonga.jpg'
import EnygmaMusicImgURl from '../../assets/ImgsProjects/projeto-enygmamusic.jpg'
import OnepieceImgURl from '../../assets/ImgsProjects/projeto-onepiece.jpg'
import TodoListImgURl from '../../assets/ImgsProjects/projeto-todolist.jpg'
import { ButtonBG } from "../Button/styles"

import { Container, CardProjects, Content } from "./styles"

export function ProjectsCarousel() {
  return (
    <Container>
      <h1>Esses são os Projetos de Eduardo</h1>
      <Content>
        <CardProjects>
          <div>
            <img src={ColdTechImgURl} alt="Imagem de projetos" />
          </div>
          <h3>e-commerce - ColdTech</h3>
          <p>ReactJS, JavaScript, HTML e CSS</p>
          <div>
            <span>01</span>
            <a href="#"><ButtonBG>Repositório</ButtonBG></a>
          </div>
        </CardProjects>

        <CardProjects>
          <div>
            <img src={CursoMarktingImgURl} alt="Imagem de projetos" />
          </div>
          <h3>LandingPage - Curso Markting Digital</h3>
          <p>JavaScript, HTML e CSS</p>
          <div>
            <span>02</span>
            <a href="#"><ButtonBG>Repositório</ButtonBG></a>
          </div>
        </CardProjects>

        <CardProjects>
          <div>
            <img src={JogoDaMemoriaImgURl} alt="Imagem de projetos" />
          </div>
          <h3>Jogo da Memória</h3>
          <p>JavaScript, HTML e CSS</p>
          <div>
            <span>03</span>
            <a href="#"><ButtonBG>Repositório</ButtonBG></a>
          </div>
        </CardProjects>

        <CardProjects>
          <div>
            <img src={JogoDaVelhaImgURl} alt="Imagem de projetos" />
          </div>
          <h3>Jogo da Velha</h3>
          <p>JavaScript, HTML e CSS</p>
          <div>
            <span>04</span>
            <a href="#"><ButtonBG>Repositório</ButtonBG></a>
          </div>
        </CardProjects>

        <CardProjects>
          <div>
            <img src={JogoDaMemoriaImgURl} alt="Imagem de projetos" />
          </div>
          <h3>Jogo da Memória</h3>
          <p>ReactJS, JavaScript, HTML e CSS</p>
          <div>
            <span>05</span>
            <a href="#"><ButtonBG>Repositório</ButtonBG></a>
          </div>
        </CardProjects>

        <CardProjects>
          <div>
            <img src={PlaylistDjongaImgURl} alt="Imagem de projetos" />
          </div>
          <h3>Playlist Djonga</h3>
          <p>JavaScript, HTML e CSS</p>
          <div>
            <span>06</span>
            <a href="#"><ButtonBG>Repositório</ButtonBG></a>
          </div>
        </CardProjects>

        <CardProjects>
          <div>
            <img src={EnygmaMusicImgURl} alt="Imagem de projetos" />
          </div>
          <h3>Enygma Musics</h3>
          <p>JavaScript, HTML e CSS</p>
          <div>
            <span>07</span>
            <a href="#"><ButtonBG>Repositório</ButtonBG></a>
          </div>
        </CardProjects>
        <CardProjects>
          <div>
            <img src={OnepieceImgURl} alt="Imagem de projetos" />
          </div>
          <h3>One Piece - Personagens</h3>
          <p>JavaScript, HTML e CSS</p>
          <div>
            <span>08</span>
            <a href="#"><ButtonBG>Repositório</ButtonBG></a>
          </div>
        </CardProjects>
        <CardProjects>
          <div>
            <img src={TodoListImgURl} alt="Imagem de projetos" />
          </div>
          <h3>To-Do List</h3>
          <p>ReactJS, JavaScript, HTML e CSS</p>
          <div>
            <span>09</span>
            <a href="#"><ButtonBG>Repositório</ButtonBG></a>
          </div>
        </CardProjects>
      </Content>
    </Container>
  )
}