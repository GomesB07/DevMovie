import React from 'react'
import { useNavigate } from 'react-router-dom'

import { getImages } from '../../utils/getImages'
import Sinopse from '../Sinopse'
import { Container, DivCard, InfoCard } from './styles'

const Card = ({ info, searchPage }) => {
  const navigate = useNavigate()

  console.log(info)

  return (
    <Container searchPage={searchPage}>
      {info && info.length !== 0 ? (
        info.map((i) => (
          <DivCard
            searchPage={searchPage}
            key={i.id}
            onClick={() =>
              navigate(
                `/detalhe/${i.category === 'serie' ? 'serie' : 'filme'}/${i.id}`
              )
            }
          >
            <img src={getImages(i.poster_path)} />

            <InfoCard searchPage={searchPage}>
              <h2>{i.title || i.name}</h2>
              {searchPage && <Sinopse text={i.overview} maxWords={25} />}
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
