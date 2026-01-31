import AddProductForm from '@/components/products/AddProductForm'
import ProductForm from '@/components/products/ProductForm'
import Heading from '@/components/ui/Heading'

/*
Aquí se usa el método de "COMPOSITION PATTERN" para poder renderizar elementos de servidor dentro de un componente de cliente. Si ves cómo está compuesto el componente AddProductForm, verás que es un componente de cliente que toma children (nodos de React), para renderizar el componente que sea que se ponga entre las etiquetas de apertura y cierre, en este caso el componente de ProductForm, que es un componente de servidor.
*/
export default function page() {
    return (
        <>
            <Heading>Nuevo Producto</Heading>

            <AddProductForm>
                <ProductForm />
            </AddProductForm>
        </>
    )
}
