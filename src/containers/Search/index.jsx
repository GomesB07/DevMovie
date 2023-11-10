import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import Card from '../../components/Card'
import { Container } from './styles'

const Search = () => {
  const location = useLocation()
  const { infos, data } = location.state

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Container>
      {infos.length === 0 ? (
        <p>
          Nenhum resultado para <strong>{data.search}</strong>
        </p>
      ) : (
        <div className="div-results">
          <h1>
            Resultados para <strong>{data.search}</strong>
          </h1>
          <Card info={infos} searchPage />
        </div>
      )}
    </Container>
  )
}
export default Search
