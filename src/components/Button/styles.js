import styled from "styled-components";

export const ButtonBG = styled.button`
  background-color: ${ ({ theme }) => theme.colors.colorBgSecondary};
  font-weight: 500;
  color: var(--color-main);
  border: none;
  font-size: 18px;
  padding: 11px 16px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.5s;

  :hover, :active, :focus{
    background-color: ${ ({ theme }) => theme.colors.colorText};
    color: ${ ({ theme }) => theme.colors.colorBg};
  }
`

export const ButtonNoBG = styled.button`
  background-color: #00000000;
  font-weight: 500;
  color: ${ ({ theme }) => theme.colors.colorText};
  border: 1px solid ${ ({ theme }) => theme.colors.colorText};
  font-size: 18px;
  padding: 10px 15px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.5s;

  :hover, :active, :focus{
    border: 1px solid black;
    background-color: white;
    color:  black;
  }
`