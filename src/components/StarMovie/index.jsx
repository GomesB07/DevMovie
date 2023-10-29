import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { getImages } from '../../utils/getImages'
import Button from '../Button'
import Modal from '../Modal'
import Sinopse from '../Sinopse'
import { Background, Container, Info, ContainerButtons, Poster } from './styles'

const StarMovie = ({ info, abaMovie }) => {
  const navigate = useNavigate()
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      {info && (
        <Background abaMovie={abaMovie} image={getImages(info.backdrop_path)}>
          {showModal && <Modal movieId={info.id} setShowModal={setShowModal} />}
          <Container abaMovie={abaMovie}>
            <Info abaMovie={abaMovie}>
              <h1>{info.title || info.name}</h1>
              {abaMovie || <Sinopse text={info.overview} maxWords={25} />}

              <ContainerButtons>
                <Button
                  isRed
                  onClick={() =>
                    navigate(
                      `/detalhe/${info.title ? 'filme' : 'serie'}/${info.id}`
                    )
                  }
                >
                  Assista Agora
                </Button>
                <Button onClick={() => setShowModal(true)}>
                  Assista o Trailer
                </Button>
              </ContainerButtons>
            </Info>
            <Poster abaMovie={abaMovie}>
              <img src={getImages(info.poster_path)} alt="capa do filme" />
            </Poster>
          </Container>
        </Background>
      )}
    </>
  )
}

export default StarMovie
