import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import Poster from '../Poster'
import { Container } from './styles'

const Slider = ({ info, title }) => {
  return (
    <Container>
      <h2>{title}</h2>
      <Swiper grabCursor spaceBetween={10} slidesPerView={'auto'}>
        {info.map((item, index) => (
          <SwiperSlide key={index}>
            <Poster item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  )
}
export default Slider
