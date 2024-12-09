import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Gallery = () => {
  const swiperRef = useRef(null);
  const [imgSrc, setImgSrc] = useState([
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
    "10.jpg",
    "11.jpg",
    "12.jpg",
    "13.jpg",
    "14.jpg",
    "15.jpg",
    "16.jpg",
    "17.jpg",
    "18.jpg",
    "19.jpg",
    "20.jpg",
    "21.jpg",
    "22.jpg",
    "23.jpg",
    "24.jpg",
    "25.jpg",
    "26.jpg",
    "27.jpg",
    "28.jpg",
    "29.jpg",
    "29.jpg",
    "30.jpg",
    "31.jpg",
  ]);

  return (
    <section
      className="w-full py-20 px-5 sm:p-20 flex flex-col  items-center text-black space-y-10"
      id="gallery"
    >
      <h1 className="text-5xl under font-bold tracking-wider capitalize">
        photo gallery
      </h1>
      <Swiper
        modules={[EffectCoverflow, Autoplay]}
        autoplay={{
          delay: 2000,
        }}
        loop
        effect="coverflow"
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          600: {
            slidesPerView: 2,
          },
          900: {
            slidesPerView: 3,
          },
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="w-full lg:w-[95%]"
      >
        {imgSrc.map((src) => (
          <SwiperSlide>
            <img
              src={`images/gallery/${src}`}
              alt="Photos"
              className="w-full h-80 sm:h-[400px] rounded-xl "
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="space-x-5 flex items-center mx-auto relative">
        <div
          className="size-16 rounded-full bg-black shadow-lg flex items-center justify-center text-white hover:bg-orange-400 transition-all duration-500 cursor-pointer "
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <ChevronLeft size={54} />
        </div>
        <div
          className="size-16 rounded-full bg-black text-white shadow-lg flex items-center justify-center hover:bg-orange-400 transition-all duration-500 cursor-pointer"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <ChevronRight size={54} />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
