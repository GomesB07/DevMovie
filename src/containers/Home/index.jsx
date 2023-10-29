import React, { useEffect, useState } from 'react'

import Slider from '../../components/Slider'
import StarMovie from '../../components/StarMovie'
import {
  homeMovies,
  homePopularSeries,
  homeTopMovies,
  homeTopPeoples,
  homeTopSeries
} from '../../services/getData'

const Home = () => {
  const [movie, setMovie] = useState([])
  const [topMovies, setTopMovies] = useState([])
  const [topSeries, setTopSeries] = useState([])
  const [popularSeries, setPopularSeries] = useState([])
  const [topPeoples, setTopPeoples] = useState([])

  useEffect(() => {
    Promise.all([
      homeMovies(),
      homeTopMovies(),
      homeTopSeries(),
      homePopularSeries(),
      homeTopPeoples()
    ])
      .then(([movie, topMovies, topSeries, popularSeries, topPeoples]) => {
        setMovie(movie)
        setTopMovies(topMovies)
        setTopSeries(topSeries)
        setPopularSeries(popularSeries)
        setTopPeoples(topPeoples)
      })
      .catch((error) => console.error(error))

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <StarMovie info={movie} />
      {topMovies && <Slider info={topMovies} title="Top Filmes" />}
      {topSeries && <Slider info={topSeries} title="Top Séries" />}
      {popularSeries && (
        <Slider info={popularSeries} title="Séries Populares" />
      )}
      {topPeoples && <Slider info={topPeoples} title="Top Artistas" />}
    </>
  )
}

export default Home
