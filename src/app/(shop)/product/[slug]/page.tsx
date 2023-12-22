import { ProductSlideshow, QuantitySelector, SizeSelector } from "@/components";
import { initialData } from "@/seed/seed";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Props {
    params: {
        slug: string;
    }
}

export default function ({ params }: Props){
    const { slug } = params;
    const product = initialData.products.find(product => product.slug === slug)
    if(!product) notFound();
    return (
        <div className="mt-5 mb-10 grid md: grid-cols-3 gap-3">
            <div className="col-span-3 md:col-span-2">
                <ProductSlideshow 
                    title={product.title}
                    images={product.images}
                />
            </div>
            <div className="col-span-3 md:col-span-1 px-5">
                <h1 className="font-bold text-xl">{product.title}</h1>
                <p className="text-lg mb-5">${product.price}</p>
                <SizeSelector selectedSize={product.sizes[0]} availableSizes={product.sizes}/>
                <QuantitySelector quantity={2}/>
                <div className="my-5 rounded bg-violet-500 text-white p-2 w-1/2 text-center">
                    <Link href='/cart'>Add to cart</Link>
                </div>
                <h3 className="font-bold text-sm">Description</h3>
                <p className="font-light">{product.description}</p>
            </div>
        </div>
    )
}