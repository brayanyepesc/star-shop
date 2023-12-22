import Link from "next/link"
import { IoCartOutline } from "react-icons/io5"

export default function (){
    return (
        <div className="flex justify-center items-center h-[800px]">
            <IoCartOutline size={80} className="mx-5"/>
            <div className="flex flex-col items-center">
                <h1 className="text-xl font-bold">¡Oh no! Your cart is <span className="text-violet-500">empty</span></h1>
                <Link href='/' className="underline">Go shopping</Link>
            </div>
        </div>
    )
}