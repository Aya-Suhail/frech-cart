"use client"
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { registerSchema } from "@/schema/register.schema";
// import { RegisterForm , RegisterPayload } from "@/services/register.service";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Controller, FieldValues, useForm } from "react-hook-form";
// import { toast } from "@/components/ui/toast"


const Register = () => {
 const route = useRouter()

  const { handleSubmit, control } = useForm({
    defaultValues:{
      name:'',
      email:'',
      phone:'',
      password:'',
      rePassword:''
    },
    resolver:zodResolver(registerSchema),
    mode:"onBlur"
  });

 async  function handleRegister(value:FieldValues){
   try{
   const response =await fetch(`https://ecommerce.routemisr.com/api/v1/auth/signup`,{
    method:'POST',
    body:JSON.stringify(value),
    headers:{
      "content-type":'application/json'
    }
   })
    if(response.ok){
      //navigate login
      route.push('/Login')
    }
   }catch(err){
   }

  }



  return (
    <div className="w-[70%] mx-auto shadow-xl p-10 rounded-md my-5 border border-gray-300">
      <h1 className="text-center text-3xl text-green-700 font-bold">Register Form</h1>
     <form onSubmit={handleSubmit(handleRegister)}>

<Controller
  name="name"
  control={control}
  render={({ field, fieldState }) => (
    <Field className="mt-3" data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>Name</FieldLabel>
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
  name="email"
  control={control}
  render={({ field, fieldState }) => (
    <Field className="mt-3" data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>Email</FieldLabel>
      <Input
        {...field}
        id={field.name}
        type="email"
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
  name="password"
  control={control}
  render={({ field, fieldState }) => (
    <Field className="mt-3" data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>Password</FieldLabel>
      <Input
        {...field}
        id={field.name}
        type="password"
        aria-invalid={fieldState.invalid}
      />
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>
<Controller
  name="rePassword"
  control={control}
  render={({ field, fieldState }) => (
    <Field className="mt-3" data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>Confirm password</FieldLabel>
      <Input
        {...field}
        id={field.name}
        type="password"
        aria-invalid={fieldState.invalid}
      />
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>


        <Button type="submit" variant='destructive' className='bg-green-700 my-4 text-white'>Register Now</Button>
    </form>
    </div>
    
  );
};

export default Register;
