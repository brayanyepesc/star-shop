import { QuantitySelector, Title } from "@/components";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

const productsInCart = [
    initialData.products[0],
    initialData.products[1],
    initialData.products[2],
]

export default function (){
    // redirect('/empty')
    return (
        <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
            <div className="flex flex-col w-[1000px]">
                <Title 
                    title="My cart"
                />
                <div className="grid grid-col-1 sm:grid-cols-2 gap-10">
                    <div className="flex flex-col mt-5">
                        <Link href="/" className="underline">Add more products</Link>
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
                                        <p>${product.price}</p>
                                        <QuantitySelector quantity={3}/>
                                        <button>Remove</button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="bg-white rounded-xl shadow-xl p-7 flex flex-col justify-between">
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
                            <Link href='/checkout/address'>Checkout</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}