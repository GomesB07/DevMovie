import CloseIcon from '@mui/icons-material/Close'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import Logo from '../../assets/logo.png'
import { getSearch } from '../../services/getData'
import { Container, Menu, Li, ContainerForm } from './styles'

const Header = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const [changeBackground, setChangeBackground] = useState(false)
  const [searchView, setSearchView] = useState(false)
  const [menuView, setMenuView] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm()

  const onSubmit = async (data) => {
    const infos = await getSearch(data)
    navigate('/pesquisa', { state: { infos, data } })
    setSearchView(false)
    reset()
  }

  window.onscroll = () => {
    if (!changeBackground && window.scrollY > 150) {
      setChangeBackground(true)
    }
    if (changeBackground && window.scrollY <= 150) {
      setChangeBackground(false)
    }
  }

  const openSearch = () => {
    setMenuView(false)
    setSearchView(true)
  }

  const closeMenu = () => {
    setMenuView(false)
  }

  return (
    <>
      <Container changeBackground={changeBackground}>
        <img src={Logo} alt="logo" onClick={() => navigate('/')} />

        <Menu menuView={menuView}>
          <CloseIcon className="close-icon" onClick={() => closeMenu()} />

          <Li isActive={pathname === '/'}>
            <Link to="/" onClick={() => closeMenu()}>
              Home
            </Link>
          </Li>
          <Li isActive={pathname.includes('filmes')}>
            <Link to="/filmes" onClick={() => closeMenu()}>
              Filmes
            </Link>
          </Li>
          <Li isActive={pathname.includes('series')}>
            <Link to="/series" onClick={() => closeMenu()}>
              Séries
            </Link>
          </Li>
          <Li>
            <SearchIcon onClick={() => openSearch()} />
          </Li>
        </Menu>

        <MenuIcon
          className="menu-icon"
          style={{ color: '#fff' }}
          onClick={() => setMenuView(true)}
        />
      </Container>

      <ContainerForm search={searchView}>
        <div
          className="background-form"
          onClick={() => setSearchView(false)}
        ></div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="input"
            placeholder="Filme, Série, Artista..."
            {...register('search', { required: true })}
          />
          {errors.exampleRequired && <span>Campo obrigatório</span>}
          <input className="button" type="submit" />
        </form>
      </ContainerForm>
    </>
  )
}
export default Header
