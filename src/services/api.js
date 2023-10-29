import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: '90b4b1f7873a473c1e36e6d75f5542b2',
    language: 'pt-BR',
    page: 1
  }
})
export default api
