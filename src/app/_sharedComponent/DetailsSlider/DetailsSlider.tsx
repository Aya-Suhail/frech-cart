"use client"
import { useState, type CSSProperties } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import type { Swiper as SwiperInstance } from 'swiper';
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";

const DetailsSlider = ({ imgList }: { imgList: string[] }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperInstance | null>(null);
  const swiperStyle = {
    "--swiper-navigation-color": "#fff",
    "--swiper-pagination-color": "#fff",
  } as CSSProperties;

  return (
    <>
      <Swiper
        // style={swiperStyle}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {imgList.map((src, i) => {
          return (
            <SwiperSlide key={i}>
              <Image src={src} alt={`src/${i}`} className="w-full max-h-100" width={300} height={180} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper
        loop={true}
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {imgList.map((src, i) => {
          return (
            <SwiperSlide key={i}>
              <Image src={src} alt={`src/${i}`} className="h-50" width={300} height={180} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default DetailsSlider;
