import styled from "styled-components"

export const Container = styled.section`
  max-width: 768px;
  margin: auto;
  margin-bottom: 100px;
  padding: 15px;
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
  justify-content: space-between;
  gap: 10px;
  width: 200px;
  height: 140px;

  background-color: var(--color-secondary-text);
  padding: 15px 5px;
  border-radius: 10px;
  transition: all 0.5s;
  box-sizing: content-box;

  h4{
    color: white;
  }

  p{
    color: var(--color-tertiary-text);
    font-size: 14px;
    padding: 0px 7px;
    overflow-wrap: break-word;  
    word-wrap: break-word; 
    word-break: break-word;
  }

  a{
    color: white;
    text-decoration: underline;
    text-decoration-color: var(--color-secondary);
    :hover, :focus, :active{
      color: var(--color-secondary);
    }
  }

  img{
    width: 35px;
  }
`