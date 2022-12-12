import styled from "styled-components";

export const CardProjects = styled.div`
  border-radius: 10px;
  min-width: 280px;
  height: 350px;
  padding: 10px;
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
  opacity: 0.85;
  overflow: hidden;
  transform: scale(0.97);

  :hover{
    transform: scale(1);
    opacity: 1;
  }

  img{
    width: 100%;
    border-radius: 4px;
  }
`

export const TechsProject = styled.p`
  color: #909090;
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