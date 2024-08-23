import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import InfoHeader from "../../Components/InfoHeader/InfoHeader";
import { AppContext } from "../../Hooks/AppContextComponent";

let imgs = [
  "3qfzp416.jpg",
  "c6p4t3d9.jpg",
  "fqgw928v.jpg",
  "s38rt5ns.jpg"
];

const Header = () => {

  const { BASE_URL } = useContext(AppContext);

  return (
    <div className="Page Header" id="Header">
      <Swiper
        slidesPerView="1"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        speed={1000}
        loop="true"
        modules={[Autoplay]}
        className="mySwiper"
      >
        {imgs.map((img, index) => {
          return (
            <SwiperSlide
              key={index}
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${BASE_URL}${img})`,
              }}
            />
          );
        })}
      </Swiper>
      <InfoHeader />
    </div>
  );
};

export default Header;
