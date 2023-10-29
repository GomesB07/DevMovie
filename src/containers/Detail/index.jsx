import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Credits from '../../components/Credits'
import Slider from '../../components/Slider'
import SpanGenres from '../../components/SpanGenres'
import {
  movieVideos,
  movieCredits,
  detailSimilar,
  detailById,
  combinedCredits
} from '../../services/getData'
import { getImages } from '../../utils/getImages'
import {
  Container,
  Background,
  Cover,
  Info,
  ContainerMovies,
  YearsOld,
  Bio
} from './styles'

const Detail = () => {
  const [movie, setMovie] = useState([])
  const [videos, setVideos] = useState([])
  const [credits, setCredits] = useState([])
  const [similar, setSimilar] = useState([])
  const [isPeople, setIsPeople] = useState(false)
  const [cast, setCast] = useState([])

  const params = useParams()

  useEffect(() => {
    Promise.all([
      detailById(params),
      movieVideos(params.id),
      movieCredits(params),
      detailSimilar(params)
    ])
      .then(([movie, videos, credits, similar]) => {
        setMovie(movie)
        setVideos(videos)
        setCredits(credits)
        setSimilar(similar)
        setIsPeople(movie.category === 'pessoa')
      })
      .catch((error) => console.error(error))
  }, [params])

  useEffect(() => {
    Promise.all([combinedCredits(movie.id)])
      .then((cast) => {
        setCast(cast[0])
      })
      .catch((error) => console.error(error))
  }, [isPeople, movie.id])

  return (
    <>
      {movie && (
        <>
          {movie.category !== 'pessoa' ? (
            <>
              <Background image={getImages(movie.backdrop_path)} />
              <Container>
                <Cover>
                  <img src={getImages(movie.poster_path)} />
                </Cover>

                <Info>
                  <h2>{movie.title || movie.name}</h2>
                  <SpanGenres genres={movie.genres} />
                  <p>{movie.overview}</p>
                  {credits && (
                    <div className="div-credits">
                      <Credits credits={credits} />
                    </div>
                  )}
                </Info>
              </Container>
              <ContainerMovies>
                {videos &&
                  videos.map((video) => (
                    <div key={video.id}>
                      <h4>{movie.name}</h4>
                      <iframe
                        src={`https://www.youtube.com/embed/${video.key}`}
                        title="Youtube Video Player"
                        height="500px"
                        width="100%"
                      ></iframe>
                    </div>
                  ))}
              </ContainerMovies>
              {similar && <Slider info={similar} title="Similares" />}
            </>
          ) : (
            <>
              <Background
                style={{ backgroundColor: 'yellow' }}
                image={getImages(movie.backdrop_path)}
              />
              <Container>
                <Cover>
                  <img src={getImages(movie.profile_path)} />
                </Cover>

                <Info>
                  <h2>{movie.name}</h2>

                  <YearsOld>
                    <div>
                      <h3>Nascimento:</h3>
                      <h4>{movie.birthday}</h4>
                      <h4>{movie.place_of_birth}</h4>
                    </div>

                    {movie.deathday && (
                      <div>
                        <h3>Morte:</h3>
                        <h4>{movie.deathday}</h4>
                      </div>
                    )}
                  </YearsOld>

                  <Bio>
                    <h3>{movie.biography}</h3>
                  </Bio>
                </Info>
              </Container>
              {/* <ContainerMovies>
                {videos &&
                  videos.map((video) => (
                    <div key={video.id}>
                      <h4>{movie.name}</h4>
                      <iframe
                        src={`https://www.youtube.com/embed/${video.key}`}
                        title="Youtube Video Player"
                        height="500px"
                        width="100%"
                      ></iframe>
                    </div>
                  ))}
              </ContainerMovies> */}
              {cast && <Slider info={cast} title="Participações" />}
            </>
          )}
        </>
      )}
    </>
  )
}
export default Detail
