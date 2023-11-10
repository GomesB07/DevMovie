import React from 'react'
import { useNavigate } from 'react-router-dom'

import { getImages } from '../../utils/getImages'
import { Container, DivCard, InfoCard } from './styles'

const Card = ({ info, searchPage }) => {
  const navigate = useNavigate()

  return (
    <Container searchPage={searchPage}>
      {info && info.length !== 0 ? (
        info.map((i) => (
          <DivCard
            key={i.id}
            onClick={() => navigate(`/detalhe/${i.media_type}/${i.id}`)}
          >
            {i.poster_path ? (
              <img src={getImages(i.poster_path)} />
            ) : (
              <div className="without-img" />
            )}

            <InfoCard>
              <h2>{i.title || i.name}</h2>
            </InfoCard>
          </DivCard>
        ))
      ) : (
        <div>
          <h2 style={{ color: 'red' }}>{info}</h2>
        </div>
      )}
    </Container>
  )
}
export default Card
