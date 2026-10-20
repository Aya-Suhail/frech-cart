"use client";
import { toast } from "@/components/ui/toast";
import { cartContext } from "@/context/cartContext";
import { CartProduct } from "@/interface/cartProduct.interface";
import { clearProducts } from "@/services/cartAction/clearCart.action";
import { deleteProducts } from "@/services/cartAction/deleteProduct.action";
import { getCartProducts } from "@/services/cartAction/getProductsCart.action";
import { updateProducts } from "@/services/cartAction/updateProductCart.action";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";

const ProductCartTable = () => {
  const {setCartNumber}=useContext(cartContext)
  const [productList, setProduct] = useState<CartProduct[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [cartId,setCartId] = useState<number>(0)


  async function getProducts() {
    const response = await getCartProducts();
    // console.log(response);
    setProduct(response.data.products);
    setTotalPrice(response.data.totalCartPrice);
    setCartNumber(response.numOfCartItems)
    setCartId(response.cartId)
  }

  useEffect(()=>{
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getProducts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  

  async function removeItem(productId: string) {
    try {
      const response = await deleteProducts(productId);

      if (response.status == "success") {
        setProduct(response.data.products);
        setTotalPrice(response.data.totalCartPrice);
        setCartNumber(response.numOfCartItems)

        // toast
        toast.add({
          title: "success",
          description: "product removed success",
        });
      }
    } catch (err) {
      toast.add({
        title: "Error",
        description: "product removed Faild",
      });
    }
  }


  async function clearCartProducts(){
    try{
     const response=  await clearProducts()
   if(response.message =='success'){
     getCartProducts()
   }
    }catch(err){
      
    }
  }

  async function updateCart(productId: string , count:number){
      
      try {
      const response = await updateProducts(productId,count)
      if (response.status == "success") {
        setProduct(response.data.products);
        setTotalPrice(response.data.totalCartPrice);
        setCartNumber(response.numOfCartItems)

        // toast
        toast.add({
          title: "Success",
          description: "product update success",
        });
      }
    } catch (err) {
      toast.add({
        title: "Error",
        description: "product update Faild",
      });
    }
  }

  return (
    <div className="container w-[90%] mx-auto py-10">
      <div className="grid md:grid-cols-10 gap-x-5">
        {productList.length > 0 ? (
          <>
            <div className="col-span-7">
                <button onClick={()=>{clearCartProducts()}} className="text-white bg-red-700 px-2 py-3 rounded-md my-4">Clear Cart</button>
              
                <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
                  <table className="w-full text-sm text-left rtl:text-right text-body">
                    <thead className="text-sm text-body bg-neutral-secondary-medium border-b border-default-medium">
                      <tr>
                        <th scope="col" className="px-16 py-3">
                          <span className="sr-only">Image</span>
                        </th>
                        <th scope="col" className="px-6 py-3 font-medium">
                          Product
                        </th>
                        <th scope="col" className="px-6 py-3 font-medium">
                          Qty
                        </th>
                        <th scope="col" className="px-6 py-3 font-medium">
                          Price
                        </th>
                        <th scope="col" className="px-6 py-3 font-medium">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {productList.map((product:CartProduct) => {
                        return <tr key={product._id} className="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium">
                            <td className="p-4">
                              <Image
                                src={product.product.imageCover}
                                width={200}
                                height={180}
                                className="w-16 md:w-24 max-w-full max-h-full"
                                alt="Apple Watch"
                              />
                            </td>
                            <td className="px-6 py-4 font-semibold text-heading">
                              {product.product.title}
                            </td>
                            <td className="px-6 py-4">
                              <form className="max-w-xs mx-auto">
                                <label
                                  htmlFor="counter-input-1"
                                  className="sr-only"
                                >
                                  Choose quantity:
                                </label>
                                <div className="relative flex items-center">
                                  <button
                                    type="button"
                                    onClick={()=>{updateCart(product.product._id,product.count-1)}}
                                    id="decrement-button-1"
                                    data-input-counter-decrement="counter-input-1"
                                    className="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary rounded-full text-sm focus:outline-none h-6 w-6"
                                  >
                                    <svg
                                      className="w-3 h-3 text-heading"
                                      aria-hidden="true"
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={24}
                                      height={24}
                                      fill="none"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 12h14"
                                      />
                                    </svg>
                                  </button>
                                  <input
                                    type="text"
                                    id="counter-input-1"
                                    data-input-counter
                                    className="shrink-0 text-heading border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center"
                                    defaultValue={product.count}
                                    required
                                  />
                                  <button
                                    type="button"
                                    onClick={()=>{updateCart(product.product._id,product.count+1)}}
                                    id="increment-button-1"
                                    data-input-counter-increment="counter-input-1"
                                    className="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary rounded-full text-sm focus:outline-none h-6 w-6"
                                  >
                                    <svg
                                      className="w-3 h-3 text-heading"
                                      aria-hidden="true"
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={24}
                                      height={24}
                                      fill="none"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 12h14m-7 7V5"
                                      />
                                    </svg>
                                  </button>
                                </div>
                              </form>
                            </td>
                            <td className="px-6 py-4 font-semibold text-heading">
                              {product.price}
                            </td>
                            <td className="px-6 py-4">
                              <a
                                href="#"
                                onClick={()=>{removeItem(product.product._id)}}
                                className="font-medium text-red-500 font-bold hover:underline"
                              >
                                Remove
                              </a>
                            </td>
                          </tr>
})}
                    </tbody>
                  </table>
                </div>
              </div>
            

            <div className="col-span-3">
              <div className="border border-slate-200 bg-slate-200 shadow-xl p-10 rounded-md">
                <h3 className="text-3xl font-bold my-5 text-green-700">
                  Total Price:
                </h3>
                <span className="font-bold text-2xl">{totalPrice} Egp</span>
                <div className="grid md:grid-cols-2 pt-5 gap-x-5">
                <Link href={`/checkout/${cartId}`}><button  className="bg-green-700 text-slate-200 px-3 py-2 rounded-md">with Payment</button></Link>
                <Link href={`/cashOrder/${cartId}`}><button className="bg-green-700 text-slate-200 px-3 py-2 rounded-md">pay OnDilvery</button></Link>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="col-span-10">
            <h3 className="text-6xl font-bold text-green-400 test-center py-10">
              Empty cart....
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCartTable;
// 8:30
