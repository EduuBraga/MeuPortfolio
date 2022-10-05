import styled, { keyframes } from "styled-components"

export const Container = styled.nav`
  z-index: 10;
  background-color: ${ ({ theme }) => theme.colors.colorBgBlur};
  backdrop-filter: blur(5px);
  position: sticky;
  top: 0;
  padding: 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  div{
    margin-right: 14px;

    img{
      width: 30px;
    }
  }
  
`

export const Logo = styled.div`
  margin-left: 14px;
  font-weight: 800;
  font-size: 40px;
  color: ${ ({theme}) => theme.colors.colorBgSecondary};
`

export const NavBar = styled.div`
  display: flex; 
  gap: 20px;

  a{
    font-size: 18px;
    font-weight: 700;
    color:${ ({theme}) => theme.colors.colorTextSecondary};

    :hover{
      text-decoration: underline;
      color: ${ ({theme}) => theme.colors.colorBgSecondary};
    }
  }
`

export const ContainerSettings = styled.div`
  position: relative;
  display: flex;
  gap: 10px;

`



export const SwitchSettings = styled.button`
  background-color: #00000000;
  border: none;

  :active{
    transform: scale(0.90);
  }

  img{
    z-index: 5;
    cursor: pointer;
  }
`

export const SwitchTheme = styled.div`
  position: absolute;
  left: -50px;
  bottom: ${({isVisible})=> isVisible === true ? '-1px' : '50px'};
  transition: bottom 1s ease;
`