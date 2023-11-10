import React, { useEffect, useState } from 'react'

import Card from '../../components/Card'
import StarMovie from '../../components/StarMovie'
import { allMovies } from '../../services/getData'

const Movies = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const getMovies = async () => {
      const data = await allMovies()
      setMovies(
        data.data.results.map((result) => ({ ...result, mediaType: 'movie' }))
      )
    }

    getMovies()
  }, [])

  return (
    <>
      <StarMovie info={movies[0]} MoviesAndSeries />
      <Card info={movies} />
    </>
  )
}
export default Movies
