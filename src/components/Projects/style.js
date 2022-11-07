import styled from "styled-components";

export const CardProjects = styled.div`
  border-radius: 10px;
  min-width: 280px;
  height: 320px;
  padding: 10px;
  background-color: var(--color-secondary-text);
  margin: 0px 10px 10px 10px;

  display: flex;
  flex-direction: column;
  justify-content:space-around;
  gap: 10px;

  div:nth-child(1){
    text-align: center;
    transition: all 0.4s ease;
    opacity: 0.85;
    overflow: hidden;
    transform: scale(0.97);

    :hover{
      transform: scale(1);
      opacity: 1;
    }

    img{
      width: 100%;
      border-radius: 3px;
    }
  }

  h3{
    color: white;
  }

  div:nth-child(3){
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    gap: 10px;
    
    span{
      font-weight: 700;
      font-size: 45px;
      display: flex;
      align-items: center;
      padding: 0px 12px;
      color: black;
      text-shadow: 2px 0px 0px  #ffffff, -2px 0px 0px #ffffff ,  0px -2px 0px #ffffff, 0px 2px 0px #ffffff;
    }
  }
`