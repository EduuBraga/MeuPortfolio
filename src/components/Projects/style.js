import styled, { keyframes } from "styled-components";

const animationOpacity = keyframes`
  0%{
    opacity: 0.50;
  }
  100%{
    opacity: 1;
  }
`

export const CardProjects = styled.div`
  border-radius: 10px;
  min-width: 280px;
  height: 350px;
  padding: 12px;
  background-color: var(--color-secondary-text);
  margin: 0px 10px 10px 10px;

  display: flex;
  flex-direction: column;
  justify-content:space-around;
  gap: 8px;

  h3{
    color: white;
  }
`

export const ContainerTopCard = styled.div`
  text-align: center;
  transition: all 0.3s ease;
  opacity: 1;
  overflow: hidden;
  transform: scale(1);
  position: relative;

  :hover{
    transform: scale(1.02);
  }

  &:hover::before{
    content: 'Abrir Aplicação';
    cursor: pointer;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    font-size: 20px;
    font-weight: 700;
    color: #ffffff;
    background-color: #10101070;
    animation: ${animationOpacity} 0.3s ;
  }

  img{
    width: 100%;
    border-radius: 4px;
  }
`

export const TechsProject = styled.p`
  color: #afafaf;
  font-size: 14px;
`

export const ContainerBottomCard = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  gap: 10px;
`

export const NumberToProject = styled.span`
  font-weight: 700;
  font-size: 45px;
  display: flex;
  align-items: center;
  padding: 0px 12px;
  color: black;
  text-shadow: 2px 0px 0px  #ffffff, -2px 0px 0px #ffffff ,  0px -2px 0px #ffffff, 0px 2px 0px #ffffff;
`