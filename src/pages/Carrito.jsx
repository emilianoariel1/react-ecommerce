import { Link } from "react-router-dom"
import { useCarritoContext } from "../context/CarritoContext"

const Carrito = () => {

  const { carrito, quitarDelCarrito, vaciarCarrito } = useCarritoContext()

  const total = carrito.reduce((acc, producto) => {
    return acc + producto.price
  }, 0)

  return (
    <div class="my-10 flex gap-5">
      
      <div className="border-4 border-black p-5 rounded-md w-[80%]">
        <p class="text-4xl">Carrito</p>
      
        {carrito.map((prod, index) => (
          <div class="flex my-5 gap-7 items-center border rounded-md px-2">
            <Link to={`/producto/${prod.id}`} class="flex items-center gap-4 py-3">
              <img src={prod.image} class="w-16 h-16"/>
              <h3>{prod.title}: ${prod.price}.0</h3>
            </Link>
            <button onClick={() => quitarDelCarrito(index)} 
              class="bg-red-400 text-black font-semibold py-2 px-2 border-2 border-red-400 hover:border-black rounded text-sm cursor-pointer ml-auto">
                Quitar
            </button>
          </div>
        ))}
      
        {carrito.length === 0 ? 
        <p class="mt-4 text-3xl">No hay productos seleccionados...</p>
        :
        <button onClick={() => vaciarCarrito()} class="bg-red-400 text-black font-semibold py-2 px-2 border-2 border-red-400 hover:border-black rounded text-xs cursor-pointer">Vaciar Carrito</button>
        }
      </div>

      <div className="border-4 border-black p-5 rounded-md w-[20%] items-center flex flex-col gap-y-5 h-full">
        <p className="text-2xl">Resumen</p>
        <p className="text-xl">Envio: Gratis!</p>
        <p className="text-xl">Total: ${total}.0</p>
        <button 
          class="bg-[#DDD0C8] text-black font-semibold py-2 px-2 border-2 border-transparent hover:border-black rounded text-md cursor-pointer block">
            Continuar con el pago
        </button>
      </div>
    
    </div>
  )
}

export default Carrito