import styled from 'styled-components'

export const Title = styled.h4`
  color: #fff;
  font-size: 28px;
  font-weight: 700;
`

export const Container = styled.h2`
  display: flex;
  margin-top: 30px;
  gap: 10px;

  div {
    display: flex;
    flex-direction: column;
    cursor: pointer;

    h2 {
      color: #fff;
      font-size: 12px;
      margin: 20px 0 10px 0;
    }

    p {
      color: #fff;
      font-size: 12px;
      margin: 0;
    }

    img {
      height: 200px;
      width: auto;
    }
  }

  @media (max-width: 800px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`
