import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { getImages } from '../../utils/getImages'
import Button from '../Button'
import Modal from '../Modal'
import Sinopse from '../Sinopse'
import { Background, Container, Info, ContainerButtons, Poster } from './styles'

const StarMovie = ({ info, MoviesAndSeries }) => {
  const navigate = useNavigate()
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      {info && (
        <Background
          MoviesAndSeries={MoviesAndSeries}
          image={getImages(info.backdrop_path)}
        >
          {showModal && <Modal movieId={info.id} setShowModal={setShowModal} />}
          <Container MoviesAndSeries={MoviesAndSeries}>
            <Info MoviesAndSeries={MoviesAndSeries}>
              <h1>{info.title || info.name}</h1>
              {MoviesAndSeries || (
                <Sinopse text={info.overview} maxWords={25} />
              )}

              <ContainerButtons>
                <Button
                  isRed
                  onClick={() => navigate(`/detalhe/movie/${info.id}`)}
                >
                  Assista Agora
                </Button>
                <Button onClick={() => setShowModal(true)}>
                  Assista o Trailer
                </Button>
              </ContainerButtons>
            </Info>
            <Poster MoviesAndSeries={MoviesAndSeries}>
              <img src={getImages(info.poster_path)} alt="capa do filme" />
            </Poster>
          </Container>
        </Background>
      )}
    </>
  )
}

export default StarMovie
