import styled from "styled-components"

export const Container = styled.header`
  z-index: 10;
  background-color: ${({ theme }) => theme.colors.colorBgBlur};
  backdrop-filter: blur(5px);
  position: sticky;
  top: 0;
  padding: 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width:  768px){
    padding: 0px;
  }
`

export const Logo = styled.div`
  margin-left: 14px;
  padding: 5px;
  border-radius: 5px;
  font-weight: 800;
  font-size: 40px;
  color: ${({ theme }) => theme.colors.colorBgSecondary};
  background-color: var(--color-main);

  @media screen and (max-width:  768px){
    display: none;
  }
`

export const NavBar = styled.div`
  display: flex; 
  gap: 20px;

  @media screen and (max-width:  768px){
    display: none;
  }

  a{
    font-size: 18px;
    font-weight: 700;
    color:${({ theme }) => theme.colors.colorTextSecondary};

    :hover{
      text-decoration: underline;
      color: ${({ theme }) => theme.colors.colorBgSecondary};
    }
  }
`

export const ContainerSettings = styled.div`
  position: relative;
  display: flex;
  gap: 10px;

  @media screen and (max-width:  768px){
    display: none;
  }
`

export const SwitchSettings = styled.button`
  background-color: #00000000;
  border: none;

  :active{
    transform: scale(0.90);
  }

  img{
    width: 30px;
    z-index: 5;
    cursor: pointer;
  }
`

export const SwitchTheme = styled.div`
  position: absolute;
  left: -50px;
  bottom: ${({ isVisible }) => isVisible === true ? '-1px' : '60px'};
  transition: bottom 1s ease;

  img{
    width: 30px;
  }

  button{
    cursor: pointer;
    background-color: #00000000;
    border: none;

    :active{
      transform: scale(0.90);
    }
  }
`

// === Menu ===
export const ContainerMenu = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: ${({ menuItIsVisible }) => menuItIsVisible === true ? '0' : '-230px'};
  height: 100vh;
  width: 220px;

  transition: left 1s ease;
  background-color: ${({ theme }) => theme.colors.colorBg};
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow:${({ theme }) => theme.title === 'dark' ? '-5px 0px 15px #00000080 inset' : '-5px 0px 15px var(--color-tertiary) inset'};

  nav{
    display: flex;
    flex-direction: column;
    gap: 10px;

    margin-top: 10px;

    a{
      font-size: 18px;
      font-weight: 700;
      color:${({ theme }) => theme.colors.colorTextSecondary};

      :hover{
        text-decoration: underline;
        color: ${({ theme }) => theme.colors.colorBgSecondary};
      }
    }
  }

  div{
    align-self: flex-end;

    button{
      background-color: #00000000;
      border: none;
      cursor: pointer;

      :active{
        transform: scale(0.90);
      }
      img{
        width: 30px;
      }
    }
  }
`

export const ButtonClose = styled.button`
  position: absolute;
  right: 8px;
  top: 8px;
  background-color: #00000000;
  border: none;
  cursor: pointer;

  :active{
    transform: scale(0.90);
  }

  img{
    width: 20px;
  }
`

export const IconMenu = styled.img`
  width: 30px;
  margin: 10px;
  cursor: pointer;
`

export const ContentFromTabletAndMobile = styled.div`
  @media screen and (min-width:  769px){
    display: none;
  }

  div{
    position: absolute;
    top: 10px;
    right: 10px;
    transition: bottom 1s ease;

    img{
      width: 30px;
    }

    button{
      cursor: pointer;
      background-color: #00000000;
      border: none;

      :active{
        transform: scale(0.90);
      }
    }
  }
`