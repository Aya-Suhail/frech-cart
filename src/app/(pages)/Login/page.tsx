"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { toast } from "@/components/ui/toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/schema/login.schema";
import { LoginPayload } from "@/services/login.service";
import { signIn } from "next-auth/react";

const Login = () => {
  const Router = useRouter();
  const { handleSubmit, control } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(LoginSchema),
    mode: "onBlur",
  });

  async function handleLogin(values: LoginPayload) {
    // call api

    const response = await signIn("credentials", {
      ...values,
      redirect: false,
    });

    //  const response = await  LoginForm(values)

    if (response?.ok) {
      // route home
      Router.push("/");
      // toast
      toast.add({
        title: "Success",
        description: "you are loged in successfuly...",
      });
    } else {
      Router.push("/Login");
      // error
      toast.add({
        title: "Error",
        description: "there is an error...",
      });
    }
  }

  // token
  //NextAuth

  return (
    <>
      <div className="w-[50%] mx-auto shadow-xl border rounded-md p-10 my-10">
        <h1 className="text-3xl font-bold text-center">Create Your Account</h1>
        <p className="text-center pb-5">
          Start your fresh journey with us today
        </p>
        <form onSubmit={handleSubmit(handleLogin)}>
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
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
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
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Button
            type="submit"
            variant="destructive"
            className="bg-green-700 my-4 text-white"
          >
            Login Now
          </Button>
        </form>
      </div>
    </>
  );
};

export default Login;

//  npm i next-auth
// npm i jwt-decode
