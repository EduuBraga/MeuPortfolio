import styled from "styled-components"

export const ContainerHome = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 100px;

  img{
    width: 210px;

    @media screen and (max-width:  768px){
      width: 150px;
    }
  }
`

export const ContainerHomeTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  gap: 10px;
  padding: 10px;

  @media screen and (max-width:  768px){
    margin-bottom: 0px;
  }

  @media screen and (max-width: 426px){
    flex-direction: column;
    gap: 0px;
  }

  div:nth-child(1){
    img{
      border-radius: 50%;
    }
  }

  div:nth-child(2){
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media screen and (max-width: 426px){
      align-items: center;
    }
    
    p:nth-child(1){
      font-weight: 800;
      font-size: 118px;
      transform: translateY(20px);

      @media screen and (max-width:  768px){
        font-size: 57px;
        transform: translateY(10px);
      }
    }
    p:nth-child(2){
      font-weight: 800;
      font-size: 90px;
      transform: translateY(-20px);

      @media screen and (max-width:  768px){
        font-size: 40px;
        transform: translateY(-10px);
      }
    }
  }
`

export const ContainerHomeBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;

  p{
    text-align: center;
    font-size: 40px;
    letter-spacing: 0.1em;

    @media screen and (max-width:  768px){
        font-size: 28px;
    }
    @media screen and (max-width: 426px){
      flex-direction: column;
      font-size: 24px;
    }
  }

  div{
    display: flex;
    align-items: center;
    gap: 30px;

    @media screen and (max-width:  768px){
      gap: 20px;    
    }
    @media screen and (max-width: 426px){
      flex-direction: column;
      gap: 5px;
    }
  }
`