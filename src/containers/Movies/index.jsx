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
        data.data.results.map((result) => ({ ...result, category: 'filme' }))
      )
    }

    getMovies()
  }, [])

  return (
    <>
      <StarMovie info={movies[0]} abaMovie={true} />
      <Card info={movies} />
    </>
  )
}
export default Movies
