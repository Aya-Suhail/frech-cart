
"use client"

import { Button } from "@/components/ui/button"
import { Controller, useForm } from "react-hook-form";
import {
  Field,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import {useParams , useRouter} from 'next/navigation';
import { useContext } from "react";
import { cartContext } from "@/context/cartContext";
import { CashSchema } from "@/schema/cashOrder.schema";
import { CheckOrder } from "@/interface/checkout.interface";
import { CashOrder } from "@/services/cashOrder.service";
import { toast } from "@/components/ui/toast";



export default function Checkout() {

    const Router = useRouter()
     const {setCartNumber}=useContext(cartContext)

  const { id } = useParams<{ id: string }>()
   const {control,handleSubmit}=useForm({
    defaultValues:{
      city:'',
      phone:'',
      details:'',
      postalCode:''
    },
    resolver:zodResolver(CashSchema),
    mode:"onBlur"
  })


 async function handlePayment(value:CheckOrder){
   const response = await  CashOrder(id,value)

   if(response.status == 'success'){
    Router.push('/')
    setCartNumber(0)
    toast.add({
               title: "success",
              description: "done !",
    })
   }else{
    toast.add({
              description:response.message,
    })
   }
 }


  return (
    <>
        <div className="w-[50%] mx-auto shadow-xl p-10 rounded-md my-5 border border-gray-300">
      <h1 className="text-center text-3xl text-green-700 font-bold">Payment Form</h1>
     <form onSubmit={handleSubmit(handlePayment)}>

<Controller
  name="city"
  control={control}
  render={({ field, fieldState }) => (
    <Field className="mt-3" data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>City</FieldLabel>
      <Input
        {...field}
        id={field.name}
        type="text"
        aria-invalid={fieldState.invalid}
      />
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>

<Controller
  name="phone"
  control={control}
  render={({ field, fieldState }) => (
    <Field className="mt-3" data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>Phone</FieldLabel>
      <Input
        {...field}
        id={field.name}
        type="tel"
        aria-invalid={fieldState.invalid}
      />
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>

<Controller
  name="details"
  control={control}
  render={({ field, fieldState }) => (
    <Field className="mt-3" data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>Details</FieldLabel>
      <Input
        {...field}
        id={field.name}
        type="text"
        aria-invalid={fieldState.invalid}
      />
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>

<Controller
  name="postalCode"
  control={control}
  render={({ field, fieldState }) => (
    <Field className="mt-3" data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>postalCode</FieldLabel>
      <Input
        {...field}
        id={field.name}
        type="text"
        aria-invalid={fieldState.invalid}
      />
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>

  <Button type="submit" variant='destructive' className='bg-green-700 my-4 text-white'>pay Now</Button>


</form>
</div>
    </>
  )
}

