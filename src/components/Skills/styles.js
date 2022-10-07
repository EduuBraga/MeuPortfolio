import styled from "styled-components"

export const Container = styled.section`
  margin: 0 auto;
  max-width: 765px;
  margin-top: 150px;
  padding: 15px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media screen and (max-width:  768px){
    margin-top: 100px;
  }

  h1{
    font-size: 36px;

    @media screen and (max-width:  768px){
      font-size: 28px;
    }
    @media screen and (max-width: 426px){
      font-size: 24px;
    }
  }
`

export const ContainerTop = styled.div`
  display: grid;
  grid-template: auto auto / auto auto auto auto;
  gap: 20px;  

  @media screen and (max-width:  768px){
    grid-template: auto auto auto auto / auto auto;
  }
  @media screen and (max-width: 426px){
    grid-template: auto auto auto auto auto auto auto auto / auto;
  }

  a{
    text-decoration: none;
    transition: all 0.5s;
    border-radius: 8px;

    :hover{
      text-decoration: none;
      transform: scale(1.05) translateY(-5px);  
      box-shadow: 0px 0px 5px 1px ${ ({ theme }) => theme.colors.colorText};    
    }
    :active, :focus{
      text-decoration: none;
      transform: translateY(-5px);
      box-shadow: 0px 0px 5px 1px ${ ({ theme }) => theme.colors.colorText};    
    }

    p{
      color: white;
    }
  }

  div{
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 20px;

    width: 170px;
    background-color: black;
    padding: 8px;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 500;

    @media screen and (max-width: 426px){
      width: 90vw;
    }

    img{
      width: 35px;
    }
  }
`

export const ContainerBottom = styled.div`
  font-size: 18px;
  @media screen and (max-width: 426px){
    font-size: 16px;
  }

  a{
    text-decoration: underline;
    text-decoration-color:var(--color-secondary) ;
    transition: all 0.2s;

    :hover {
      background-color: #00000090;
      color: var(--color-secondary);
    }
    :active, :focus{
      color: var(--color-secondary);
    }
  }
`