import styled, { keyframes } from 'styled-components'

const scale = keyframes`
    from{
        transform: scale(0)
    }
    to{
        transform: scale(1)
    }
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  max-width: 1500px;
  margin-top: -100px;
`

export const Background = styled.div`
  background-image: url(${(props) => props.image});
  height: 50vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 120px;
    background-image: linear-gradient(to top, #000, rgba(0, 0, 0, 0));
  }
`

export const Cover = styled.div`
  padding: 20px;
  display: flex;
  align-items: flex-start;
  height: 100%;
  z-index: 2;

  img {
    width: 450px;
    border-radius: 30px;
    box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
    animation: ${scale} 0.5s linear;
  }

  @media (max-width: 900px) {
    display: none;
  }
`
export const Info = styled.div`
  padding: 20px;
  width: 50%;
  z-index: 2;
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  h2 {
    font-size: 50px;
    font-weight: 700;
    color: #fff;
  }

  p {
    font-weight: 700;
    color: #fff;
    margin: 20px 0 30px 0;
  }

  @media (max-width: 900px) {
    width: 100%;
    h2 {
      font-size: 35px;
    }
    p {
      font-size: 20px;
    }
  }

  @media (max-width: 800px) {
    width: 100%;
    h2 {
      font-size: 25px;
    }
    p {
      font-size: 12px;
    }

    .div-credits {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`

export const ContainerMovies = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 100%;

  div {
    display: flex;
    flex-direction: column;
    max-width: 1000px;
    width: 100%;
    height: 100%;
    margin: 20px 0;
  }

  h4 {
    color: #fff;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  iframe {
    border: none;
  }

  @media (max-width: 800px) {
    /* display: none; */
    iframe {
      height: 200px;
    }
  }
`

export const YearsOld = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 20px 0 0 20px;
  width: max-content;

  div {
    color: #fff;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  @media (max-width: 800px) {
    display: none;
  }
`
export const Bio = styled.div`
  /* background-color: green; */
  color: #fff;
  font-weight: 300;
  line-height: 170%;
  margin: 30px 0 0 20px;

  @media (max-width: 800px) {
    display: none;
  }
`
