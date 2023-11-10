import styled, { keyframes } from 'styled-components'

const breakpoints = {
  xs: '320px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
}
export const devices = {
  xs: `(min-width: ${breakpoints.xs})`,
  sm: `(min-width: ${breakpoints.sm})`,
  md: `(min-width: ${breakpoints.md})`,
  lg: `(min-width: ${breakpoints.lg})`,
  xl: `(min-width: ${breakpoints.xl})`,
  '2xl': `(min-width: ${breakpoints['2xl']})`
}

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`

export const Container = styled.div`
  background-color: ${(props) =>
    props.changeBackground ? '#000' : 'transparent'};
  transition: background-color 0.6s ease-in-out;
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 25px;
  z-index: 5;
  position: fixed;
  top: 0;

  img {
    width: 25%;
    cursor: pointer;
  }

  .menu-icon {
    display: none;
  }

  @media (max-width: 800px) {
    .menu-icon {
      display: block;
    }

    img {
      width: 50%;
    }
  }
`

export const Menu = styled.ul`
  width: max-content;
  height: 100%;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  list-style: none;

  .close-icon {
    display: none;
  }

  @media (max-width: 800px) {
    background-color: #000000;
    height: 100%;
    width: min-content;
    padding: 30px;
    display: ${(props) => (props.menuView ? 'flex' : 'none')};
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    border-left: 2px solid grey;
    animation: ${slideIn} 0.3s ease-in-out;

    .close-icon {
      display: ${(props) => (props.menuView ? 'block' : 'none')};
    }
  }
`

export const Li = styled.li`
  color: #fff;
  font-weight: 600;
  font-size: 28px;
  cursor: pointer;
  position: relative;

  a {
    color: #fff;
    text-decoration: none;
  }

  &::after {
    content: '';
    height: 3px;
    width: ${(props) => (props.isActive ? '100%' : '0%')};
    background-color: #189b20;
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    transition: width 0.5s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }

  @media (max-width: 350px) {
    font-size: 20px;
  }
`

export const ContainerForm = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 4;
  display: ${(props) => (props.search ? 'flex' : 'none')};

  .background-form {
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    z-index: 5;
    position: absolute;
  }

  form {
    width: 100%;
    height: max-content;
    padding-top: 50px;
    justify-content: center;
    gap: 20px;
    opacity: 1;
    position: absolute;
    z-index: 6;
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: center;

    .input {
      width: 70%;
      height: 30px;
      padding-left: 15px;
      border: none;
      border-radius: 5px;
    }

    .button {
      width: 10%;
      height: 30px;
      border: none;
      border-radius: 5px;
      background-color: #189b20;
      color: #fff;
      cursor: pointer;
    }
  }

  @media (max-width: 900px) {
    z-index: 10;
    form {
      .input {
        width: 60%;
      }
      .button {
        width: 25%;
        background-color: green;
      }
    }
  }
`
