import React, { useEffect, useState } from 'react'

import { movieVideos } from '../../services/getData'
import { Background, Close, Container } from './styles'

const Modal = ({ movieId, setShowModal }) => {
  const [movie, setMovie] = useState([])

  useEffect(() => {
    if (movieId) {
      const getMovies = async () => {
        setMovie(await movieVideos(movieId))
      }
      getMovies()
    }
  })

  return (
    <Background onClick={() => setShowModal(false)}>
      <Close onClick={() => setShowModal(false)} fontSize="large" />
      {movie && (
        <Container>
          <iframe
            src={`https://www.youtube.com/embed/${movie.key}`}
            title="Youtube Video Player"
            height="500px"
            width="100%"
          ></iframe>
        </Container>
      )}
    </Background>
  )
}

export default Modal
