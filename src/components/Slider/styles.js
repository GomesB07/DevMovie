import styled from 'styled-components'

export const Container = styled.div`
  padding: 0 20px;
  overflow-x: hidden;

  h2 {
    color: #fff;
    font-size: 25px;
    margin: 50px 0 20px 20px;
  }
  .swiper-wrapper {
    display: flex;
  }

  @media (max-width: 350px) {
    img {
      height: 300px;
      width: auto;
    }

    h3 {
      font-size: 12px;
    }
  }
`
