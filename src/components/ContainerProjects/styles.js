import styled from "styled-components"

export const Container = styled.section`
  max-width:1024px;
  margin: 0 auto;
  margin-top: 150px;
  margin-bottom: 150px;
  padding: 15px;

  @media screen and (max-width:  768px){
    margin-bottom: 100px;
  }

  h1{
    font-size: 36px;
    text-align: center;
    margin-bottom: 15px;

    @media screen and (max-width:  768px){
      font-size: 28px;
    }
    @media screen and (max-width: 426px){
      font-size: 24px;
    }
  }
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding:0px 100px 0px 100px ;
  gap: 10px;
  overflow-x: scroll;

  @media screen and (max-width:  768px){
    padding:0px 10px 0px 10px ;
  }
`