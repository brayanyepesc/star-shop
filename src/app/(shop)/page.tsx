import { ProductsGrid, Title } from "@/components";
import { initialData } from "@/seed/seed";
const products = initialData.products;

export default function Shop() {
  return (
    <>
      <Title 
        title="Shop"
        subtitle="All products"
        className="mb-3"
      />
      <ProductsGrid 
        products={products}
      />
    </>
  )
}
