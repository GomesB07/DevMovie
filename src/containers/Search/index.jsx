import React from 'react'
import { useLocation } from 'react-router-dom'

import Card from '../../components/Card'

const Search = () => {
  const location = useLocation()
  const infos = location.state

  // console.log(infos)

  return <Card info={infos} searchPage />
}
export default Search
