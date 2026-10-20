"use server"

import { getMyToken } from "@/Utilities/getMyToken"

type Checkout={
    city:string,
    phone:string,
    details:string
}

export async function CheckOutSession(cartId:string,formData:Checkout){
    const token = await getMyToken()
    if(!token){
        throw new Error('logi first please!')
    }

    const response =await  fetch(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=${process.env.BASEURL}`,{
        method:'POST',
        headers:{
            token: String(token),
            'content-type':'application/json'
        },
        body:JSON.stringify({
            shippingAddress:formData
        })
     })

     const payload =await  response.json()

     return payload
}