import styled from "styled-components"

export const ButtonBG = styled.button`
  background-color: var(--color-secondary);
  font-weight: 500;
  color: var(--color-main);
  border: none;
  font-size: 18px;
  padding: 11px 16px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.5s;

  :hover{
    background-color: var(--color-main-text);
  }
`

export const ButtonNoBG = styled.button`
  background-color: #00000000;
  font-weight: 500;
  color: var(--color-secondary);
  border: 1px solid var(--color-secondary);
  font-size: 18px;
  padding: 10px 15px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.5s;

  :hover{
    background-color: var(--color-main-text);
    color: var(--color-main);
  }
`