
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
import {useParams} from 'next/navigation';
import { CheckOutSchema } from "@/schema/checkOut.schema";
import { CheckOut } from "@/interface/checkout.interface";
import { CheckOutSession } from "@/services/checkout.service";



export default function Checkout() {

  const { id } = useParams<{ id: string }>()
   const {control,handleSubmit}=useForm({
    defaultValues:{
      city:'',
      phone:'',
      details:'',
    },
    resolver:zodResolver(CheckOutSchema),
    mode:"onBlur"
  })


 async function handlePayment(value:CheckOut){
   const response = await  CheckOutSession(id,value)
   if(response.status == 'success'){
    // eslint-disable-next-line react-hooks/immutability
    window.location.href= response.session.url
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

  <Button type="submit" variant='destructive' className='bg-green-700 my-4 text-white'>pay Now</Button>


</form>
</div>
    </>
  )
}

