import { prisma } from '@/app/lib/prisma'
import ProductSearchForm from '@/components/products/ProductSearchForm'
import ProductsTable from '@/components/products/ProductsTable'
import Heading from '@/components/ui/Heading'

async function searchProducts(searchTerm: string) {
    const products = await prisma.product.findMany({
        where: {
            name: {
                contains: searchTerm,
                mode: 'insensitive'
            }
        },
        include: {
            category: true
        }
    })

    return products
}

export default async function page({
    searchParams
}: {
    searchParams: Promise<{[key: string]: string | string | string[] | undefined}>
}) {
    const { search } = await searchParams

    const products = await searchProducts(search as string)

    return (
        <>
            <Heading>Resultados de búsqueda: {search}</Heading>

            <div className='flex flex-col gap-5 lg:flex-row lg:justify-end'>
                <ProductSearchForm />
            </div>

            {products.length ? (
                <ProductsTable
                    products={products}
                />
            ) : <p className='text-center text-lg'>No hay resultados</p>}
        </>
    )
}
