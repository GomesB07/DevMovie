import styled, { keyframes } from 'styled-components'

const scale = keyframes`
  from{
    transform: scale(0);
  }
  to{
    transform: scale(1);
  }
`

export const Background = styled.div`
  background-image: url(${(props) => props.image});
  height: ${(props) => (props.abaMovie ? '80vh' : '100vh')};
  background-position: ${(props) => (props.abaMovie ? 'top' : 'center')};
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: ${(props) => (props.abaMovie ? '80%' : '100%')};
    background-color: rgba(0, 0, 0, 0.5);
    background-image: linear-gradient(to top, #000, rgba(0, 0, 0, 0));
  }

  @media (max-width: 800px) {
    height: 60vh;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 60vh;
      background-color: rgba(0, 0, 0, 0.5);
      background-image: linear-gradient(to top, #000, rgba(0, 0, 0, 0));
    }
  }

  @media (max-width: 900px) {
    height: 60vh;
    &::before {
      height: 60vh;
    }
  }
`

export const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1500px;
  display: flex;
  align-items: ${(props) => (props.abaMovie ? 'flex-end' : 'center')};
  flex-direction: ${(props) => (props.abaMovie ? 'row-reverse' : 'row')};
  justify-content: space-evenly;

  @media (max-width: 800px) {
    width: 100%;
    display: flex;
    align-items: flex-end;
  }

  @media (max-width: 900px) {
    display: flex;
    align-items: flex-end;
  }
`

export const Info = styled.div`
  z-index: 2;
  padding: 20px;
  width: ${(props) => (props.abaMovie ? '100%' : '50%')};
  padding: 0 50px;
  h1 {
    font-size: 45px;
    font-weight: 700;
    color: #fff;
  }
  p {
    font-size: 20px;
    font-weight: 500;
    color: #fff;
    margin: 30px 0 20px 0;
  }

  @media (max-width: 350px) {
    h1 {
      font-size: 20px;
    }
    p {
      font-size: 12px;
    }
  }

  @media (max-width: 800px) {
    width: 100%;
    h1 {
      font-size: 25px;
    }
    p {
      font-size: 8px;
      margin: 10px 0 15px 0;
      width: 100%;
    }
  }

  @media (max-width: 900px) {
    width: 90%;
  }
`

export const ContainerButtons = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 30px;
  @media (max-width: 800px) {
    margin: 0;
  }
`

export const Poster = styled.div`
  z-index: 2;
  img {
    width: 350px;
    border-radius: 30px;
    animation: ${scale} 0.5s linear;
    margin-bottom: ${(props) => (props.abaMovie ? '15px' : '')};
    display: ${(props) => (props.abaMovie ? 'none' : '')};

    @media (max-width: 800px) {
      display: none;
    }

    @media (max-width: 900px) {
      display: none;
    }
  }
`
