import styled from "styled-components"

export const Container = styled.nav`
  z-index: 10;
  background-color: #141b1f95;
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
  color: var(--color-secondary);
`

export const NavBar = styled.div`
  display: flex; 
  gap: 30px;

  a{
    font-weight: 700;
    color:var(--color-tertiary);

    :hover{
      text-decoration: underline;
      color: var(--color-secondary);
    }
  }
`