import { Link } from "react-router-dom"
import { useCarritoContext } from "../context/CarritoContext"

const Carrito = () => {

  const { carrito, quitarDelCarrito, vaciarCarrito } = useCarritoContext()

  return (
    <div class="my-10 border-4 rounded-md p-5 border-black">
      
      <p class="text-4xl underline">Carrito</p>
      
      {carrito.map((prod, index) => (
        <div class="flex my-5 gap-7 items-center border rounded-md px-2">
          <Link to={`/producto/${prod.id}`} class="flex items-center gap-4 py-3">
            <img src={prod.image} class="w-16 h-16"/>
            <h3>{prod.title}: {prod.price}$</h3>
          </Link>
          <button onClick={() => quitarDelCarrito(index)} 
            class="bg-red-400 text-black font-semibold py-2 px-2 border-2 border-red-400 hover:border-black rounded text-sm cursor-pointer ml-auto">
              Quitar
          </button>
        </div>
      ))}
      
      {carrito.length === 0 ? 
      <p class="mt-4 text-3xl">No hay productos seleccionados</p>
      :
      <button onClick={() => vaciarCarrito()} class="bg-red-400 text-black font-semibold py-2 px-2 border-2 border-red-400 hover:border-black rounded text-xs cursor-pointer">Vaciar Carrito</button>
      }
    
    </div>
  )
}

export default Carrito