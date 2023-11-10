import React from 'react'
import { useNavigate } from 'react-router-dom'

import { getImages } from '../../utils/getImages'
import { Title, Container } from './styles'

const Credits = ({ credits }) => {
  const navigate = useNavigate()

  return (
    <>
      <Title>Créditos</Title>
      {credits && (
        <Container>
          {/* <div className="div-carrossel"> */}
          {credits.slice(0, 5).map((artist) => (
            <div
              key={artist.id}
              onClick={() => navigate(`/detalhe/person/${artist.id}`)}
            >
              <img src={getImages(artist.profile_path)} />
              <div>
                <h2>{artist.original_name}</h2>
              </div>
            </div>
          ))}
          {/* </div> */}
        </Container>
      )}
    </>
  )
}
export default Credits
