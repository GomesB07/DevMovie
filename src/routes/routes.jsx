import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Detail from '../containers/Detail'
import Home from '../containers/Home'
import Movies from '../containers/Movies'
import Search from '../containers/Search'
import Series from '../containers/Series'
import DefaultLayout from '../layout/DefaultLayout'

const myRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/filmes" element={<Movies />} />
          <Route path="/series" element={<Series />} />
          <Route path="/detalhe/:category/:id" element={<Detail />} />
          <Route path="/pesquisa" element={<Search />} />
        </Route>
      </Routes>
    </Router>
  )
}
export default myRoutes
