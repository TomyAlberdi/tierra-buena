import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

let imgs = [
  "http://kfkit.rometheme.pro/garvest/wp-content/uploads/sites/21/2022/03/L-6.jpg",
  "http://kfkit.rometheme.pro/garvest/wp-content/uploads/sites/21/2022/03/L-2.jpg",
  "http://kfkit.rometheme.pro/garvest/wp-content/uploads/sites/21/2022/03/L-4.jpg",
  "http://kfkit.rometheme.pro/garvest/wp-content/uploads/sites/21/2022/03/L-5.jpg"
]

const Header = () => {
  return (
    <div className="Header">
      <Swiper
        slidesPerView="1"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        speed={1000}
        loop="true"
        modules={[Autoplay]}
        className='mySwiper'
      >
        {
          imgs.map((img, index) => {
            return (<SwiperSlide key={index} style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url(${img})`}}/>)
          })
        }
      </Swiper>
      <section className="info">
        eyyyyyyyyyyyyyy
      </section>
    </div>
  )
}

export default Header