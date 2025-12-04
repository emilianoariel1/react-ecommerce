import { useBusqueda } from "../context/BusquedaContext"
import { useProductoContext } from "../context/ProductoContext"
import { Link } from "react-router-dom"
import { useState } from "react"

const ResultadoBusqueda = () => {

  const { busqueda } = useBusqueda()
  const { productos } = useProductoContext()

  const [paginaActual, setPaginaActual] = useState(1)
  
  const listaFiltrada = productos.filter((producto) =>
    producto.title.toLowerCase().includes(busqueda.toLowerCase())
  )

  //paginacion
  const productosPorPagina = 8
  
  const ultimoProducto = paginaActual * productosPorPagina
  const primerProducto = ultimoProducto - productosPorPagina
  const productosActuales = listaFiltrada.slice(primerProducto, ultimoProducto)

  const totalPaginas = Math.ceil(listaFiltrada.length / productosPorPagina)
  const cambiarPagina = (numeroPagina) => setPaginaActual(numeroPagina)

  return (
    <div class="mt-10">
        
        <p class="text-4xl mb-10">Resultados de: "{busqueda}"</p>
        
        {productosActuales.length > 0 ? (
            <>
                {productosActuales.map((prod, index) => (
                    <Link key={index} to={`/producto/${prod.id}`} class="flex my-5 gap-7 items-center border rounded-md px-2 py-3 hover:cursor-pointer hover:bg-white/12">
                        <div class="flex items-center gap-4">
                            <img src={prod.image} class="w-16 h-16"/>
                            <p className='text-xl'>{prod.title}</p>
                        </div>
                        <p className='text-2xl ml-auto mr-10'>${prod.price}.0</p>
                    </Link>
                ))}

                <div className="flex justify-center gap-2 my-8">
                    {Array.from({ length: totalPaginas }, (_, indice) => (
                        <button
                            key={indice + 1}
                            className={`px-4 py-2 rounded-xl ${
                                paginaActual === indice + 1 
                                ? "bg-black text-[#DDD0C8]" 
                                : "bg-[#DDD0C8] text-gray-700 hover:bg-gray-300 cursor-pointer border-3 hover:border-black"
                            }`}
                            onClick={() => cambiarPagina(indice + 1)}
                        >
                            {indice + 1}
                        </button>
                    ))}
                </div>
            </>
        ) : (
            <p class="mt-4 text-3xl mb-8">No se encontraron productos.</p>
        )}
        
    </div>
  )
}

export default ResultadoBusqueda