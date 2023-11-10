import styled, { keyframes } from 'styled-components'

const upSearchResults = keyframes`
  from{
    transform: translateY(300px);
  }
  to{
    transform: translateY(0);
  }
`

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  gap: 20px;
  flex-flow: row wrap;
  padding: 20px;

  @media (max-width: 900px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
`

export const DivCard = styled.div`
  height: max-content;
  width: 300px;
  min-height: 211px;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  color: #fff;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  cursor: pointer;

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    animation: ${upSearchResults} 0.3s linear;
  }

  .without-img {
    width: 100%;
    height: 159px;
    border-radius: 8px;
    background-color: #202020;
    z-index: 10;
    animation: ${upSearchResults} 0.3s linear;
  }

  @media (max-width: 900px) {
    width: 100%;
  }
`

export const InfoCard = styled.div`
  align-items: center;
  width: 100%;
  height: 50px;
  min-height: 60px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
  color: #fff;
  font-weight: 700;
  padding: 10px;
  border-radius: 8px;

  h2 {
    font-size: 20px;
    animation: ${upSearchResults} 0.3s linear;
  }

  @media (max-width: 900px) {
    padding: 0 5px;
    h2 {
      font-size: 10px;
    }
  }
`
