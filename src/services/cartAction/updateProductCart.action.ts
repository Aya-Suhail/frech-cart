import { getMyToken } from "@/Utilities/getMyToken"

export async function updateProducts(productId:string , count:number){
   
  const token = await getMyToken()
    if(!token){
    throw new Error('logi first please!')
  }
 const response = await fetch(`https://ecommerce.routemiser.com/api/v1/cart/${productId}`,{
  method:'PUT',
        headers:{
            token: String(token),
            'content-type':'application/json'
        },
    body:JSON.stringify({
     count:count
    })

    
  })

  const payload = await response.json()

  return payload
}