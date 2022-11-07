import styled from "styled-components"

export const Container = styled.footer`
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
  padding: 0px 0px 50px 10px;

  @media screen and (max-width:  768px){
    justify-content: center;
  }
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  font-weight: 700;
  font-size: 14px;

  @media screen and (max-width:  768px){
    flex-direction: column;
    gap: 10px;
  }

  span{
    @media screen and (max-width:  768px){
      display: none;
    }
  }

  img{
    width: 40px;
  }
`

export const SocialMidia = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
`

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