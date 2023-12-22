'use client'
import { useUIStore } from "@/store"
import Link from "next/link"
import { IoSearchOutline, IoCartOutline, IoMenuOutline } from 'react-icons/io5'

export const TopMenu = () => {
    const openSideMenu = useUIStore(store => store.openSideMenu)
  return (
    <nav className="flex px-5 justify-between items-center w-full">
        <div>
            <Link href='/'>
                <span className="font-bold">Star | Shop</span>
            </Link>
        </div>
        <div className="hidden sm:block">
            <Link href='/categories/men' className="m-2 p-2 rounded-d transition-all hover:bg-gray-100 rounded-md">Man</Link>
            <Link href='/categories/women' className="m-2 p-2 rounded-d transition-all hover:bg-gray-100 rounded-md">Women</Link>
            <Link href='/categories/kids' className="m-2 p-2 rounded-d transition-all hover:bg-gray-100 rounded-md">Kids</Link>
        </div>
        <div className="flex items-center">
            <Link href='/search' className="mx-2">
                <IoSearchOutline className="w-5 h-5"/>
            </Link>
            <Link href='/cart' className="mx-2">
                <div className="relative">
                    <span className="absolute text-xs rounded-full px-1 font-bold -top-2 -right-2 bg-violet-500 text-white">3</span>
                    <IoCartOutline className="w-5 h-5"/>
                </div>
            </Link>
            <button 
                className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
                onClick={openSideMenu}
            >
                <IoMenuOutline className="w-5 h-5"/>
            </button>
        </div>
    </nav>
  )
}