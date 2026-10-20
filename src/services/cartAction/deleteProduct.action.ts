import { getMyToken } from "@/Utilities/getMyToken"

export async function deleteProducts(productId:string){
  const token = await getMyToken()
    if(!token){
        throw new Error('logi first please!')
    }
 const response = await fetch(`https://ecommerce.routemiser.com/api/v1/cart/${productId}`,{
  method:'DELETE',
        headers:{
            token: String(token),
            'content-type':'application/json'
        },
    
  }
)

  const payload = await response.json()

  return payload
}