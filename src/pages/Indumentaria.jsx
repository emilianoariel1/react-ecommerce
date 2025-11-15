import { Link } from "react-router-dom"
import { SyncLoader } from "react-spinners"
import { useProductoContext } from "../context/ProductoContext"
import { useCarritoContext } from "../context/CarritoContext"

const Indumentaria = () => {
  
  const { productos, cargando, error } = useProductoContext()
  const { agregarAlCarrito } = useCarritoContext()

  const listaFiltrada = productos.filter((prod) => prod.category == "Indumentaria")
    
  if(cargando)
    return <div class="text-center my-10"><SyncLoader color="#DDD0C8" /></div>
      
  if(error)
    return <p>{error}</p>
  
    return (
    <div class="mt-10">
        
        <p class="text-4xl underline mb-10">Lo ultimo en Indumentaria</p>
        
        {listaFiltrada.map((prod, index) => (
          <div key={index} class="flex my-5 gap-7 items-center border rounded-md px-2 py-3">
            <Link to={`/producto/${prod.id}`} class="flex items-center gap-4">
              <img src={prod.image} class="w-16 h-16"/>
              <p class="">{prod.title}: {prod.price}$</p>
            </Link>

            <button onClick={() => agregarAlCarrito(prod)} 
              class="bg-[#DDD0C8] text-black font-semibold py-2 px-2 border-2 border-transparent hover:border-black rounded text-sm cursor-pointer ml-auto">
                Agregar
            </button>
          </div>
        ))}

    </div>
  )
}

export default Indumentaria