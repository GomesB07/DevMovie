import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  gap: 20px;
  flex-flow: row wrap;
  padding: 20px;
  margin-top: ${(props) => (props.searchPage ? '15vh' : '0')};
`

export const DivCard = styled.div`
  height: ${(props) => (props.searchPage ? '100px' : 'max-content')};
  width: ${(props) => (props.searchPage ? '80%' : '300px')};
  padding: ${(props) => (props.searchPage ? '0 20px' : '0')};
  display: ${(props) => (props.searchPage ? 'flex' : '')};
  flex-direction: row;
  align-items: center;
  gap: 20px;
  color: #fff;
  /* background-color: #1c1c1c; */

  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  cursor: pointer;

  img {
    width: ${(props) => (props.searchPage ? '60px' : '100%')};
    height: ${(props) => (props.searchPage ? '90%' : 'auto')};
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    border-radius: ${(props) => (props.searchPage ? '8px' : '')};
  }

  h2 {
    font-size: 16px;
  }
`

export const InfoCard = styled.div`
  align-items: ${(props) => (props.searchPage ? 'flex-start' : 'center')};
  height: ${(props) => (props.searchPage ? '90%' : '50px')};
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
  color: #fff;
  font-weight: 700;
  width: 100%;
  min-height: 60px;
  padding: 10px;
  border-radius: 8px;

  h2 {
    font-size: 20px;
  }
`
