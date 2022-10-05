import styled from "styled-components"

export const ContainerAbout = styled.section`
  margin: 0 auto;
  max-width: 765px;
  margin-top: 150px;

  h1{
    font-size: 36px;
    margin-bottom: 15px;
  }
`
export const ContainerAboutBottom = styled.div`
  display: grid;
  grid-template: auto / 2fr 1fr;
  gap: 20px;

  p:nth-child(1){
    font-size: 20px;
    font-style: normal;
    font-weight: 800;
    letter-spacing: 0.1em;
    margin-bottom: 15px;
  }
  p{
    margin-bottom: 15px;
    font-size: 18px;
  }

  img{
    width: 250px;
  }
`

export const SocialMedia = styled.div`
  text-align: right;

  img{
    margin: 10px 7px 0px 7px;
    width: 38px;
  }
`
