import styled from "styled-components"

export const HandleImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  img:nth-child(1){
    width: 38px;
    cursor: pointer;
    position: absolute;
    opacity: 1;
    z-index: 1;
    transition: all 400ms ease;

    &:active{
      transform: scale(0.95);
    }
    &:hover{
      opacity: 0;
    }
  }
  
  img:nth-child(2){
    width: 38px;
    cursor: pointer;

    &:active{
      transform: scale(0.95);
    }
  }
`