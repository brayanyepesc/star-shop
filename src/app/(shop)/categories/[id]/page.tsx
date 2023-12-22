import { ProductsGrid, Title } from "@/components";
import { Product, Category } from "@/interfaces";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

const seedProducts: Product[] = initialData.products;

interface Props {
    params: {
        id: Category;
    }
}

export default function ({ params }: Props){
    const { id } = params;
    const products = seedProducts.filter(product => product.gender === id)
    const labels: Record<Category, string> = {
        'men': 'Men',
        'women': 'Women',
        'kids': 'Kids',
        'unisex': 'All'
    }
    // if(id === 'test') notFound();
    return (
        <>
            <Title 
                title={(labels as any)[id]}
                subtitle={`${(labels as any)[id]} products`}
                className="mb-3"
            />
            <ProductsGrid 
                products={products}
            />
        </>
    )
}