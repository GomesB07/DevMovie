import CloseIcon from '@mui/icons-material/Close'
import styled from 'styled-components'

export const Background = styled.div`
  height: 200vh;
  width: 100vw;
  z-index: 5;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;

  @media (max-width: 800px) {
    height: 200vh;
    position: fixed;
  }
`

export const Close = styled(CloseIcon)`
  background-color: #000;
  color: #ff0000;
  border: 2px solid #ff0000;
  border-radius: 100%;
  z-index: 10;
  bottom: 20px;
  position: fixed;
  cursor: pointer;
`
export const Container = styled.div`
  background-color: #000;
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  padding: 50px;
  max-width: 1200px;

  iframe {
    border: none;
  }

  @media (max-width: 800px) {
    height: 30%;
    width: 80%;
    padding: 0;

    iframe {
      height: 100%;
      width: 100%;
      border: 2px solid red;
    }
  }
`
