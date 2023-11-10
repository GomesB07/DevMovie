import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { getImages } from '../../utils/getImages'
import { Container } from './styles'

const Poster = ({ item }) => {
  const navigate = useNavigate()
  const [newItem, setNewItem] = useState([])

  useEffect(() => {
    const mediaType = item.title ? 'movie' : item.profile_path ? 'person' : 'tv'
    setNewItem({ ...item, media_type: mediaType })
  }, [item])

  return (
    <>
      {newItem.poster_path || newItem.profile_path ? (
        <Container
          onClick={() =>
            navigate(`/detalhe/${newItem.media_type}/${newItem.id}`)
          }
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
