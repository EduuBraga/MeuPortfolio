import styled from "styled-components"

export const Container = styled.section`
  margin: 0 auto;
  max-width: 765px;
`

export const ContainerHome = styled.main`
  display: flex;
  flex-direction: column;
  margin-top: 100px;

  img{
    width: 210px;
  }
`

export const ContainerHomeTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  gap: 10px;

  div:nth-child(2){
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    
    p:nth-child(1){
      font-weight: 800;
      font-size: 118px;
      transform: translateY(20px);
    }
    p:nth-child(2){
      font-weight: 800;
      font-size: 90px;
      transform: translateY(-20px);

    }
  }
`

export const ContainerHomeBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  p{
    font-size: 40px;
    letter-spacing: 0.1em;
  }
`