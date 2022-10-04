import styled from "styled-components"

export const Container = styled.section`
  max-width:1024px;
  margin: 0 auto;
  margin-top: 150px;
  margin-bottom: 150px;

  h1{
    font-size: 36px;
    text-align: center;
    margin-bottom: 15px;
  }
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding:0px 100px 0px 100px ;
  gap: 10px;
  overflow-x: scroll;
`

export const CardProjects = styled.div`
  border-radius: 10px;
  min-width: 280px;
  height: 320px;
  padding: 10px;
  background-color: var(--color-secondary-text);
  margin: 0px 10px 10px 10px;

  display: flex;
  flex-direction: column;
  justify-content:center;
  gap: 10px;

  div:nth-child(1){
    text-align: center;
    img{
      width: 100%;
      border-radius: 3px;
    }
  }

  p{
    color: var(--color-tertiary-text);
    font-size: 13px;
  }

  div:nth-child(4){
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    gap: 10px;
    
    span{
      font-weight: 700;
      font-size: 45px;
      display: flex;
      align-items: center;
      padding: 0px 12px;
    }
  }
`