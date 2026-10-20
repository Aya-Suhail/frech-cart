import NextAuth, { DefaultSession } from "next-auth"
import { JWT } from "next-auth/jwt"

declare module "next-auth" {

    interface Session {
    user: {
     id:string ,
    address?: string
    } & DefaultSession["user"]
  }

  interface User  {
    token: string
  }
}


declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT extends User {
  }
}