import { useParams } from "react-router-dom"
import { SyncLoader } from "react-spinners"
import { useProductoContext } from "../context/ProductoContext"
import { useCarritoContext } from '../context/CarritoContext'
import { ToastContainer } from "react-toastify"

const DetalleProducto = () => {
  
  const { productos, cargando, error } = useProductoContext()
  const { agregarAlCarrito } = useCarritoContext()
  
  const {id} = useParams()

  const producto = productos.find(p => p.id === id)

  if(cargando)
    return <div class="text-center my-10"><SyncLoader color="#DDD0C8" size="30" /></div>
  
  if(error)
    return <p>{error}</p>

  return (
    <div class="my-10 flex mx-5">
      <div className="basis-[60%]">
        <img src={producto.image} alt={producto.title} width={300} height={300} class="ml-10"/>
      </div>
      
      <div className="justify-items-center basis-[40%]">
        <p class="text-2xl">{producto.title}</p>
        <p class="text-2xl mt-5">${producto.price}.0</p>
        <p className="w-[70%] mt-3">{producto.description}</p>
        <button onClick={() => agregarAlCarrito(producto)} 
          class="bg-[#DDD0C8] text-black font-semibold py-2 px-2 border-2 border-transparent hover:border-black rounded text-md cursor-pointer mt-9 block">
            Agregar al Carrito
        </button>
      </div>

      <ToastContainer position="bottom-right" theme="dark" />
    </div>
  )
}

export default DetalleProducto