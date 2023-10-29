import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  margin-top: 30px;
  gap: 10px;

  span {
    padding: 8px 18px;
    border: 2px solid #fff;
    border-radius: 30px;
    font-size: 12px;
    font-weight: 600;
    background-color: #0f0f0f;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 800px) {
    width: 100%;
    /* background-color: red; */
    display: flex;
    flex-wrap: wrap;

    span {
      padding: 5px 20px;
      flex-grow: 1;
    }
  }
`
