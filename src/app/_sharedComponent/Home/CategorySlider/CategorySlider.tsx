// import { Category } from "@/interface/category.interface";
import { categoryResponse } from "@/interface/response.type";
import { getCaregories } from "@/services/category.service";
import MainSlider from "../../mainSlider/MainSlider";
import SectionTitle from "../../SectionTitle/SectionTitle";


const CategorySlider = async () => {
  
 const data:categoryResponse =await  getCaregories()
  const swiperOptions = {
     breakpoints:{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 50,
          }
    }
    
    
  }


const imgList = data.data.map((cat)=>{
    return {
      path:cat.image,
      name:cat.name
    }
  })
  return (
    <div className="my-20">
      <SectionTitle  title={'Category'} subtitle={'Shop By'}/>
       <MainSlider images={imgList} isHeader={false} options={swiperOptions}/>
    </div>
  )
}

export default CategorySlider;
