import { useParams } from "react-router-dom"
import { SyncLoader } from "react-spinners"
import { useProductoContext } from "../context/ProductoContext"

const DetalleProducto = () => {
  
  const { productos, cargando, error } = useProductoContext()
  
  const {id} = useParams()

  const producto = productos.find(p => p.id === id)

  if(cargando)
    return <div class="text-center my-10"><SyncLoader color="#DDD0C8" size="30" /></div>
  
  if(error)
    return <p>{error}</p>

  return (
    <div class="my-5">
      <p class="text-2xl">{producto.title}</p>
      <p class="text-xl mt-5">Precio: {producto.price}$</p>
      <img src={producto.image} alt={producto.title} width={200} height={200}class="my-5"/>
      <p>{producto.description}</p>
    </div>
  )
}

export default DetalleProducto