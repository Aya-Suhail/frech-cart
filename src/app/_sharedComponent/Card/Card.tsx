import { Iproduct } from "@/interface/product.interface";
import Image from "next/image";
import Link from "next/link";
import { IoIosStar, IoIosStarHalf } from "react-icons/io";
import AddBtn from "../AddBtn/AddBtn";

const Card = ({product}:{product:Iproduct}) => {
  return (
    <>
      <div className="col-span-1" key={product?._id}>
                <div className="bg-grey-100 p-5 ">
                  <Link href={`/Products/${product._id}`}>                
                    <Image src={product?.imageCover} width={300} height={180} className="w-full" alt="..."/>
                    </Link>
                  <div className="py-2">
                  <p className="text-slate7300">{product.category.name} </p>
                  <h3 className="font-semibold">{product.title}</h3>
                   {/* icons */}
                  <div className="flex items-center">
                    <IoIosStar className="text-yellow-400 text-2xl"/>
                    <IoIosStar className="text-yellow-400 text-2xl"/>
                    <IoIosStar className="text-yellow-400 text-2xl"/>
                    <IoIosStarHalf className="text-yellow-400 text-2xl"/>
                    <span className="text-slate-500">({product.ratingsAverage})</span>
                  </div>
                  {/* price */}
                  <div className="flex items-center justify-between mt-3">
                    <span className="font-bold text-2xl">{product.price} Egp</span>
                    <AddBtn productId = {product._id}/>
                  </div>
                  </div>          
                </div>    
              </div>
    </>
  );
}

export default Card;
