import { initialData } from "./seed";
import prisma from '../lib/prisma'

async function main() {
    // First: Delete previous registers
    await Promise.all(
        [
            prisma.productImage.deleteMany(),
            prisma.product.deleteMany(),
            prisma.category.deleteMany()
        ]
    )

    const { categories, products } = initialData
    
    //Insert Categories
    const categoriesData = categories.map( name =>  ({ name }))
    await prisma.category.createMany({
        data: categoriesData
    })
}

(() => {
    main();
})();