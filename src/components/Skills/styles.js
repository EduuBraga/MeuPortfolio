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
    :hover, :active{
      text-decoration: none;

    }
  }
  
  div{
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 20px;

    background-color: var(--color-secondary-text);
    box-shadow: 0px 0px 5px 2px var(--color-secondary);    
    padding: 8px;
    border-radius: 8px;
    transition: all 0.5s;
    cursor: pointer;
    font-weight: 500;

    :hover{
      transform: scale(1.05) rotate(-10deg);
    }

    img{
      width: 35px;
    }
  }
`

export const ContainerBottom = styled.div`
  div{
    display: flex;
    flex-direction: column;
    gap: 15px;

    ul{
      padding-left: 20px;
    }
  }
`