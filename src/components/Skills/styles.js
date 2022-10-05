import styled from "styled-components"

export const Container = styled.section`
  margin: 0 auto;
  max-width: 765px;
  margin-top: 150px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  h1{
    font-size: 36px;
  }
`

export const ContainerTop = styled.div`
  display: grid;
  grid-template: auto auto / auto auto auto auto;
  gap: 20px;

  a{
    text-decoration: none;
    transition: all 0.5s;
    border-radius: 8px;

    :hover{
      text-decoration: none;
      transform: scale(1.05) translateY(-5px);  
      box-shadow: 0px 0px 5px 1px var(--color-main-text);    
    }
    :active, :focus{
      text-decoration: none;
      transform: translateY(-5px);
      box-shadow: 0px 0px 5px 1px var(--color-main-text);    
    }
  }
  
  div{
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 20px;

    width: 170px;
    background-color: var(--color-secondary-text);
    padding: 8px;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 500;

    img{
      width: 35px;
    }
  }
`

export const ContainerBottom = styled.div`
  font-size: 18px;
`