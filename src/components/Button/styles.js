import styled, { css } from 'styled-components'

const buttonStyle = css`
  border: 3px solid #fff;
  background-color: transparent;
  color: #fff;
  border-radius: 30px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 500;

  &:hover {
    background-color: #fff;
    color: #ff0000;
  }

  @media (max-width: 800px) {
    width: 200px;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 350px) {
    font-size: 12px;
    height: 30px;
    padding: 20px 10px;
  }
`
export const ButtonWhite = styled.button`
  ${buttonStyle}
`

export const ButtonRed = styled.button`
  ${buttonStyle}

  background-color: #ff0000;
  border: 4px solid transparent;
  box-shadow: 0px 0px 7px 8px rgb(255 0 0 / 30%);

  &:hover {
    box-shadow: 0px 0px 7px 15px rgb(255 0 0 / 30%);
    background-color: #ff0000;
    color: #fff;
  }
`
