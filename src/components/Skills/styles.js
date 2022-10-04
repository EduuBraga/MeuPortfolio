import styled from "styled-components"

export const Container = styled.section`
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
  
  div{
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;

    background-color: var(--color-secondary-text);
    box-shadow: 0px 0px 5px 0px var(--color-secondary);    
    padding: 8px;
    border-radius: 8px;
    transition: all 0.5s;
    cursor: pointer;

    :hover{
      transform: scale(1.1);
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