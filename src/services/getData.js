import api from './api'

// HOME
export const homeMovies = async () => {
  const {
    data: { results }
  } = await api.get('movie/popular')
  return results[0]
}

export const homeTopMovies = async () => {
  const {
    data: { results }
  } = await api.get('movie/top_rated')
  return results
}

export const homePopularMovies = async () => {
  const {
    data: { results }
  } = await api.get('movie/popular')
  return results
}

export const homeTopSeries = async () => {
  const {
    data: { results }
  } = await api.get('tv/top_rated')
  return results
}

export const homePopularSeries = async () => {
  const {
    data: { results }
  } = await api.get('tv/popular')
  return results
}

export const homeTopPeoples = async () => {
  const {
    data: { results }
  } = await api.get('person/popular')
  return results
}

// MODAL AND DETAIL
export const movieVideos = async (movieId) => {
  const {
    data: { results }
  } = await api.get(`movie/${movieId}/videos`)
  return results
}

// DETAIL
export const movieCredits = async (params) => {
  const {
    data: { cast }
  } = await api.get(`/${params.mediaType}/${params.id}/credits`)
  return cast
}

export const detailSimilar = async (params) => {
  const {
    data: { results }
  } = await api.get(`/${params.mediaType}/${params.id}/similar`)
  return results
}

export const detailById = async (params) => {
  const { data } = await api.get(`/${params.mediaType}/${params.id}`)
  return { ...data, media_type: params.mediaType }
}

export const combinedCredits = async (personId) => {
  const {
    data: { cast }
  } = await api.get(`/person/${personId}/combined_credits`)
  return cast
}

// PAGE "FILMES"

export const allMovies = async () => {
  const data = await api.get(`movie/popular`)
  return data
}

// PAGE SERIES

export const allSeries = async () => {
  const data = await api.get(`tv/popular`)
  return data
}

// SEARCH

export const getSearch = async ({ search }) => {
  const {
    data: { results }
  } = await api.get(`/search/multi?query=${search}`)
  return results
}
