
// import CategorySlider from "./_sharedComponent/Home/CategorySlider/CategorySlider";
import HeaderSlider from "./_sharedComponent/Home/HeaderSlider/HeaderSlider";
import HomeProducts from "./_sharedComponent/Home/HomeProducts/HomeProducts";
import dynamic from 'next/dynamic'
const CategorySlider = dynamic(() => import('./_sharedComponent/Home/CategorySlider/CategorySlider'),{
  loading:()=>{
    return <div className="bg-red-700 h-[25]">Loading....</div>
  }
});
export default function Home() {
  return (
    <div className="w-[90%] mx-auto">
    {/* header slider */}
    <HeaderSlider/>

    {/* category slider */}
    <CategorySlider/>

    {/* products */}
    <HomeProducts/>
    </div>
  );
}

// npm i swiper