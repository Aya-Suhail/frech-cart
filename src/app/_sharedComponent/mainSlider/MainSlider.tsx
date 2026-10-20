/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image ,{StaticImageData} from "next/image";
// import 'swiper/css/pagination';

interface Iimages{
  path:string | StaticImageData,
  name?:string
}

export default function MainSlider({images , options, isHeader}:{isHeader:boolean ,images:Iimages[],options:any}) {
  
  const swiperOptions = {
    loop:true,
  
  };
    return (
    <div>
        <Swiper
      {...swiperOptions} {...options}
    >
        {images?.map((slide:Iimages)=>{
         // eslint-disable-next-line react/jsx-key
         return  <SwiperSlide>
           <Image src={slide.path} alt="..." 
           
           width={1290}  height={100} 
           
           className={ isHeader ? `"w-full h-100"` : `h-50 bg-gray-500`}
           
           />
            <h4>{slide?.name}</h4>
        </SwiperSlide>

        })}
    
    </Swiper>
    </div>
  )
};


