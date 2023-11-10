import styled, { keyframes } from 'styled-components'

const opacityText = keyframes`
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 90vh;
  margin-top: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    color: #fff;
    font-weight: 300;
    animation: ${opacityText} 0.5s linear;
  }

  .div-results {
    h1 {
      color: #fff;
      font-weight: 300;
      margin: 50px 0 0 50px;
      animation: ${opacityText} 0.5s linear;

      strong {
        text-transform: capitalize;
      }
    }
  }

  @media (max-width: 900px) {
    .div-results h1 {
      font-size: 15px;
      margin: 20px;
    }
  }
`
