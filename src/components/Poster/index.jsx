import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { getImages } from '../../utils/getImages'
import { Container } from './styles'

const Poster = ({ item }) => {
  const navigate = useNavigate()
  const [newItem, setNewItem] = useState([])

  useEffect(() => {
    const category = item.title
      ? 'filme'
      : item.profile_path
      ? 'pessoa'
      : 'serie'
    setNewItem({ ...item, category })
  }, [item])

  return (
    <>
      {newItem.poster_path || newItem.profile_path ? (
        <Container
          onClick={() => navigate(`/detalhe/${newItem.category}/${newItem.id}`)}
        >
          <img
            src={getImages(newItem.poster_path || newItem.profile_path)}
            alt="capa filme"
          />
          <h3>{newItem.title || newItem.name}</h3>
        </Container>
      ) : (
        ''
      )}
    </>
  )
}

export default Poster
