"use client"
import img1 from "../../../../assests/img/blog1.png";
import img2 from "../../../../assests/img/img2.jpeg";
import img3 from "../../../../assests/img/img3.jpeg";
import MainSlider from "../../mainSlider/MainSlider";
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
const HeaderSlider = () => {
  const imgList = [
    {path:img1},
    {path:img2},
    {path:img3}
  ];
  const swiperOptions = {
    slidesPerView:1,
       pagination:{
          clickable: true,
          bulletActiveClass:"swiper-pagination-bullet-active !bg-white"
        },
        modules:[Pagination]
  };
  return (
    <div>
        <MainSlider images={imgList} isHeader={true} options={swiperOptions}/>
    </div>
  )
};

export default HeaderSlider;
