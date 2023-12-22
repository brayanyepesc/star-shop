import { QuantitySelector, Title } from "@/components";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import Link from "next/link";

const productsInCart = [
    initialData.products[0],
    initialData.products[1],
    initialData.products[2],
]

export default function (){
    return (
        <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
            <div className="flex flex-col w-[1000px]">
                <Title 
                    title="Verify you order"
                />
                <div className="grid grid-col-1 sm:grid-cols-2 gap-10">
                    <div className="flex flex-col mt-5">
                        <Link href="/cart" className="underline">Edit my cart</Link>
                        {
                            productsInCart.map(product => (
                                <div className="flex mb-5" key={product.slug}>
                                    <Image 
                                        src={`/products/${product.images[0]}`}
                                        width={100}
                                        height={100}
                                        alt={product.title}
                                        className="mr-5 rounded"
                                    />
                                    <div>
                                        <p>{product.title}</p>
                                        <p>${product.price} x 3</p>
                                        <p className="font-bold">Subtotal: ${product.price * 3}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="bg-white rounded-xl shadow-xl p-7 flex flex-col justify-between">
                        <h2 className="text-2xl mb-2">Delivery address</h2>
                        <div className="mb-10">
                            <p>Brayan</p>
                            <p>Calle 39</p>
                            <p>Medellín</p>
                            <p>Colombia</p>
                            <p>020012</p>
                            <p>31205505565</p>
                        </div>
                        <div  className="w-full h-px bg-gray-200 mb-10"/>
                        <h2 className="text-2xl mb-2">Orders Summary</h2>
                        <div className="grid grid-cols-2">
                            <span>Shipping</span>
                            <span className="text-right text-violet-500 font-bold">FREE</span>

                            <span>Quantity</span>
                            <span className="text-right">3 products</span>

                            <span>Subtotal</span>
                            <span className="text-right">$100</span>


                            <span>Sales Tax</span>
                            <span className="text-right">$25</span>

                            <span className="text-2xl mt-5">Total</span>
                            <span className="text-2xl mt-5 text-right text-violet-500 font-bold">$25</span>
                        </div>
                        <div className="w-full bg-violet-500 text-white text-center rounded-xl p-2 mt-5">
                            <Link href='/orders/123'>Checkout</Link>
                        </div>
                        <div className="mt-5">
                            <span className="text-xs text-gray-400">By clicking button, you acknowledge and agree to the following terms and conditions. Please read the terms carefully before proceeding.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}