import styled from "styled-components"

export const Container = styled.section`
  max-width: 768px;
  margin: auto;
  margin-bottom: 100px;
`

export const ContainerContactTop = styled.div`
  h1{
    font-size: 32px;
    text-align: center;
    margin-bottom: 10px;
  }
  p{
    font-size: 18px;
    margin-bottom: 15px;
    text-align: center;
  }
`

export const ContainerContactBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`

export const CardContainerContactBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  background-color: var(--color-secondary-text);
  padding: 15px 5px;
  border-radius: 10px;
  transition: all 0.5s;
  box-sizing: content-box;

  :hover{
    background-color: #00000000;
    box-shadow: 0px 0px 5px 1px var(--color-tertiary-text);
  }

  p{
    color: var(--color-tertiary-text);
    font-size: 14px;
  }

  a{
    color: var(--color-secondary);
  }

  img{
    width: 35px;
  }
`