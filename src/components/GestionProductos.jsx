import { useState } from "react"
import { SyncLoader } from "react-spinners"
import ProductoForm from "./ProductoForm"
import { Link } from "react-router-dom"
import { useProductoContext } from "../context/ProductoContext"
import { ToastContainer } from "react-toastify"

const GestionProductos = () => {

  const { productos, cargando, eliminarProducto } = useProductoContext()

  const [mostrarForm, setMostrarForm] = useState(false)
  const [modoFormulario, setModoFormulario] = useState("agregar")
  const [productoSeleccionado, setProductoSeleccionado] = useState(null)

  const formularioAgregar = () => {
    setModoFormulario("agregar")
    setProductoSeleccionado(null)
    setMostrarForm(true)
  }

  const formularioEditar = (producto) => {
    setModoFormulario("editar")
    setProductoSeleccionado(producto)
    setMostrarForm(true)
  }

  const cerrarForm = () => {
    setMostrarForm(false)
    setProductoSeleccionado(null)
  }

  if (cargando) 
    return <div class="text-center my-10"><SyncLoader color="#DDD0C8" size="30" /></div>

  return (
    <div class="mt-10">
      
      <div class="flex items-center mb-8">
        
        <p class="text-4xl">Gestion de Productos</p>
        
        <button class="bg-[#DDD0C8] text-black font-semibold py-2 px-2 border-2 border-transparent hover:border-black rounded text-sm cursor-pointer ml-auto"
        onClick={() => formularioAgregar()}>
          Agregar Producto
        </button>

      </div>  
        
        {productos.map((prod) => (
            <div key={prod.id} class="flex my-5 gap-7 items-center border rounded-md px-2 py-3"> 
              
              <Link to={`/producto/${prod.id}`} class="flex items-center gap-4">
                <img src={prod.image} class="w-16 h-16"/>
                <p>{prod.title}: ${prod.price}.0</p>
              </Link>
              
              <div class="flex ml-auto gap-3">
                <button class="bg-[#DDD0C8] text-black font-semibold py-2 px-2 border-2 border-transparent hover:border-black rounded text-sm cursor-pointer"
                onClick={() => formularioEditar(prod)}>
                  Editar
                </button>
                <button class="bg-red-400 text-black font-semibold py-2 px-2 border-2 border-red-400 hover:border-black rounded text-sm cursor-pointer"
                onClick={() => eliminarProducto(prod.id)}>
                  Eliminar
                </button>
              </div>
            
            </div>
          ))}

         
            <ProductoForm productoSeleccionado={ productoSeleccionado || {} } 
            modo={modoFormulario}
            abierto={mostrarForm} 
            cerrar={cerrarForm}
            />

            <ToastContainer position="bottom-right" theme="dark" />
         
          
        

    </div>
  )
}

export default GestionProductos