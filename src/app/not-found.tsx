
// import { BounceLoader } from "react-spinners";
import errorImg from '../assests/img/error.svg'
import Image from'next/image';
import Link from 'next/link';

export default function Loading(){
    return(<div className="h-screen text-center">
         <Image src={errorImg} alt="not-found" className="w-[60%] mx-auto"/>
         <Link className="text-green-500" href={'/'}>GO TO HOME PAGE</Link>
    </div>)
}
