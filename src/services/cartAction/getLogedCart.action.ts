import { getMyToken } from "@/Utilities/getMyToken"

export async function getCart(){
    const token = await getMyToken()

    if(!token){
        throw new Error('logi first please!')
    }

    const response =await  fetch(`https://ecommerce.routemisr.com/api/v1/cart`,{
        method:'GET',
        headers:{
            token: String(token),
            'content-type':'application/json'
        },
     })

     const payload =await  response.json()

     return payload
}