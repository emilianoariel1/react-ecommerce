import { useState } from "react"
import { useProductoContext } from "../context/ProductoContext"

const ProductoForm = ({ productoSeleccionado, modo, cerrar }) => {
 
 const { agregarProducto, editarProducto } = useProductoContext()
 
 const [errores, setErrores] = useState({})
 const [producto, setProducto] = useState(productoSeleccionado)
 
 const handleChange = (e) => {
    const {name, value} =  e.target
    setProducto({...producto, [name]: value})
 }

 const handleSubmit = async (e) => {
    e.preventDefault()
  
    if (!validarForm())
      return 
    
    const productoParaEnviar = {
      ...producto,
      price: parseFloat(producto.price) 
    }

    if (modo === "agregar") {
      await agregarProducto(productoParaEnviar)
    } else {
      await editarProducto
    }
    
    setErrores({})
 }

 const validarForm = () => {
    const nuevosErrores = {}

    if(!producto.title.trim())
      nuevosErrores.title = 'El nombre es obligatorio.'

    if(!producto.price || producto.price <= 0)
      nuevosErrores.price = 'El precio debe ser mayor a 0.'

    if (!producto.image.trim() || producto.image.length < 6)  
      nuevosErrores.image = 'Debes subir la URL de una imagen valida.'

    if (!producto.description.trim() || producto.description.length < 10)  
      nuevosErrores.description = 'La descripción debe tener al menos 10 caracteres.'

    if (!producto.category === "Indumentaria" || !producto.category === "Accesorios")
      nuevosErrores.category = 'Error al seleccionar Categoria.'
 
    setErrores(nuevosErrores)
    return Object.keys(nuevosErrores).length === 0
  }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            
            <p class='text-3xl'>{modo === "agregar" ? "Nuevo Producto" : "Editar Producto"}</p>

            <div class="my-4">
                <label>Nombre:</label>
                <br/>
                <input 
                    class="border-2 border-black rounded-md bg-[#DDD0C8] text-black pl-1"
                    type='text'
                    name='title'
                    value={producto.title || ""}
                    onChange={handleChange}
                    required
                />
                {errores.title && <p>{errores.title}</p>}
            </div>

            <div class="my-4">
                <label>Precio:</label>
                <br/>
                <input 
                    class="border-2 border-black rounded-md bg-[#DDD0C8] text-black pl-1"
                    type='number'
                    name='price'
                    value={producto.price || ""}
                    onChange={handleChange}
                    required
                />
                {errores.price && <p>{errores.price}</p>}
            </div>

            <div class="my-4">
                <label>URL de Imagen:</label>
                <br/>
                <input 
                    class="border-2 border-black rounded-md bg-[#DDD0C8] text-black pl-1"
                    type='text'
                    name='image'
                    value={producto.image || ""}
                    onChange={handleChange}
                    required
                />
                {errores.image && <p>{errores.image}</p>}
            </div>

            <div class="my-4">
                <label>Descripcion:</label>
                <br/>
                <textarea
                    class="border-2 border-black rounded-md bg-[#DDD0C8] text-black pl-1"
                    name='description'
                    value={producto.description || ""}
                    onChange={handleChange}
                    required
                />
                {errores.description && <p>{errores.description}</p>}
            </div>

            <div class="my-4">
                <label>Categoria:</label>
                <br/>
                <select 
                class="border-2 border-black rounded-md bg-[#DDD0C8] text-black pl-1" 
                name='category'
                value={producto.category || ""}
                onChange={handleChange}
                required>
                  <option value="" disabled selected hidden></option>
                  <option value="Indumentaria">Indumentaria</option>
                  <option value="Accesorios">Accesorios</option>
                </select>
                {errores.category && <p>{errores.category}</p>}
            </div>

            <div class="flex gap-3">
              <button type='submit' class="bg-[#DDD0C8] text-black font-semibold py-2 px-2 border-2 border-transparent hover:border-black rounded text-xs cursor-pointer">
                {modo === "agregar" ? <>Agregar Producto</> : <>Editar</>}
              </button>

              <button onClick={cerrar} 
                class="bg-red-400 text-black font-semibold py-2 px-2 border-2 border-red-400 hover:border-black rounded text-xs cursor-pointer">
                Cancelar
              </button>
            </div>

        </form>
    </div>
  )
}

export default ProductoForm