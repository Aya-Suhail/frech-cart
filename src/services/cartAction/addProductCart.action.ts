"use server"
import { getMyToken } from "@/Utilities/getMyToken"

export async function addProducts(productId:string){
  const token = await getMyToken()
    if(!token){
        throw new Error('logi first please!')
    }

 const response = await fetch(`https://ecommerce.routemisr.com/api/v1/cart`,{
  method:'POST',
        headers:{
            token: String(token),
            'content-type':'application/json'
        },
    body:JSON.stringify({productId:productId})  
  })

  const payload = await response.json()

  return payload
}