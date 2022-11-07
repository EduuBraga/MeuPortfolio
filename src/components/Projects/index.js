import React from "react";

import JogoDaVelhaImgURl from '../../assets/ImgsProjects/projeto-jogodavelha.jpg';
import JogoDaMemoriaImgURl from '../../assets/ImgsProjects/projeto-jogodamemoria.jpg';
import CursoMarktingImgURl from '../../assets/ImgsProjects/projeto-cursomarketing.jpg';
import ColdTechImgURl from '../../assets/ImgsProjects/projeto-coldtech.jpg';
import PlaylistDjongaImgURl from '../../assets/ImgsProjects/projeto-playlistdjonga.jpg';
import EnygmaMusicImgURl from '../../assets/ImgsProjects/projeto-enygmamusic.jpg';
import OnepieceImgURl from '../../assets/ImgsProjects/projeto-onepiece.jpg';
import TodoListImgURl from '../../assets/ImgsProjects/projeto-todolist.jpg';
import { ButtonBG } from "../Button/styles";

import { Container, CardProjects, Content } from "./styles";

export function ProjectsCarousel() {
  return (
    <Container>
      <h1>Esses são os Projetos de Eduardo</h1>
      <Content>
        <CardProjects>
          <div>
            <a href="https://e-commerce-cold-tech.vercel.app/" ><img src={ColdTechImgURl} alt="Imagem de projetos" /></a>
          </div>
          <h3>e-commerce - ColdTech</h3>
          <div>
            <span>01</span>
            <a href="https://github.com/EduuBraga/E-commerce-ColdTech" ><ButtonBG>Repositório</ButtonBG></a>
          </div>
        </CardProjects>

        <CardProjects>
          <div>
            <a href="https://curso-marketingdigital.netlify.app/" ><img src={CursoMarktingImgURl} alt="Imagem de projetos" /></a>
          </div>
          <h3>LandingPage - Curso Markting Digital</h3>
          <div>
            <span>02</span>
            <a href="https://github.com/EduuBraga/LandingPage-MarketingDigital" ><ButtonBG>Repositório</ButtonBG></a>
          </div>
        </CardProjects>

        <CardProjects>
          <div>
            <a href="https://react-jogo-da-memoria.vercel.app/" ><img src={JogoDaMemoriaImgURl} alt="Imagem de projetos" /></a>
          </div>
          <h3>Jogo da Memória</h3>
          <div>
            <span>03</span>
            <a href="https://github.com/EduuBraga/React-JogoDaMemoria" ><ButtonBG>Repositório</ButtonBG></a>
          </div>
        </CardProjects>

        <CardProjects>
          <div>
            <a href="https://jogodavelha-edubraga.netlify.app/" ><img src={JogoDaVelhaImgURl} alt="Imagem de projetos" /></a>
          </div>
          <h3>Jogo da Velha</h3>
          <div>
            <span>04</span>
            <a href="https://github.com/EduuBraga/JogoDaVelha" ><ButtonBG>Repositório</ButtonBG></a>
          </div>
        </CardProjects>


        <CardProjects>
          <div>
            <a href="https://djonga-playlist.netlify.app/" ><img src={PlaylistDjongaImgURl} alt="Imagem de projetos" /></a>
          </div>
          <h3>Playlist Djonga</h3>
          <div>
            <span>05</span>
            <a href="https://github.com/EduuBraga/PLayListDjonga" ><ButtonBG>Repositório</ButtonBG></a>
          </div>
        </CardProjects>

        <CardProjects>
          <div>
            <a href="https://enygmamusic.netlify.app/" ><img src={EnygmaMusicImgURl} alt="Imagem de projetos" /></a>
          </div>
          <h3>Enygma Musics</h3>
          <div>
            <span>06</span>
            <a href="https://github.com/EduuBraga/EnygmaMusica" ><ButtonBG>Repositório</ButtonBG></a>
          </div>
        </CardProjects>
        <CardProjects>
          <div>
            <a href="https://onepiecepersonagens.netlify.app/" ><img src={OnepieceImgURl} alt="Imagem de projetos" /></a>
          </div>
          <h3>One Piece - Personagens</h3>
          <div>
            <span>07</span>
            <a href="https://github.com/EduuBraga/OnePiece-Personagens" ><ButtonBG>Repositório</ButtonBG></a>
          </div>
        </CardProjects>
        <CardProjects>
          <div>
            <a href="https://to-do-list-eduubraga.netlify.app/" ><img src={TodoListImgURl} alt="Imagem de projetos" /></a>
          </div>
          <h3>To-Do List</h3>
          <div>
            <span>08</span>
            <a href="https://github.com/EduuBraga/todoListReact" ><ButtonBG>Repositório</ButtonBG></a>
          </div>
        </CardProjects>
      </Content>
    </Container>
  );
};