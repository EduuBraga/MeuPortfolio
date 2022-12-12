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