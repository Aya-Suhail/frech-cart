import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { jwtDecode } from "jwt-decode";

export const authOption:NextAuthOptions={
  providers:[
    Credentials({
      name:'Login',
      // input
      credentials:{
        email : {label:'Email', type:'email',placeholder:'Enter your Email'},
        password:{label:'password', type:'password',placeholder:'Enter your password'}
      },
      //  home - page error
    async authorize(credentials){
      // call api
      const response = await fetch(`${process.env.BASEURL}/auth/signin`,{
          method:'POST',
          body:JSON.stringify({
            email:credentials?.email,
            password:credentials?.password
          }),
          headers:{
            "content-type":'application/json'
          }
        })

        if(!response.ok){
          throw new Error(response.statusText)
        }
        const data = await response.json()
        const decoded = jwtDecode<{ id: string }>(data.token);
         return {
            id:decoded.id,
            email:data.user.email,
            name:data.user.name,
            token:data.token
         }
      // null
      // error
      // data id

      }
    })
  ],
  pages:{
    signIn:'/Login'
  },
  callbacks:{
    jwt({user,token}){
      if(user){
        token.id = user.id 
        token.token = user.token
      }
      return token
    },
    session({token,session}){
      if(token){
        session.user.id = String(token.id)
      }
      return session
    }
  }
}