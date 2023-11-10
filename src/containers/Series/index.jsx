import React, { useEffect, useState } from 'react'

import Card from '../../components/Card'
import StarMovie from '../../components/StarMovie'
import { allSeries } from '../../services/getData'

const Series = () => {
  const [series, setSeries] = useState([])

  useEffect(() => {
    const getMovies = async () => {
      const data = await allSeries()
      setSeries(
        data.data.results.map((result) => ({ ...result, aloBruno: 'tv' }))
      )
    }

    getMovies()
  }, [])

  return (
    <>
      <StarMovie info={series[0]} MoviesAndSeries />
      <Card info={series} />
    </>
  )
}
export default Series
