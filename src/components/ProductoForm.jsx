import { useState, useEffect } from "react"
import { useProductoContext } from "../context/ProductoContext"
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'

const ProductoForm = ({ productoSeleccionado, modo, abierto, cerrar }) => {
 
 const { agregarProducto, editarProducto } = useProductoContext()
 
 const [errores, setErrores] = useState({})
 const [producto, setProducto] = useState(productoSeleccionado)

 useEffect(() => {
     setProducto(productoSeleccionado)
   }, [productoSeleccionado])
 
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
      await editarProducto(productoParaEnviar)
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
    <Dialog open={abierto} onClose={cerrar} className="relative z-10">
        
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-900/50 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-gray-800 text-left shadow-xl outline -outline-offset-1 outline-white/10 transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
          >
            <div className="bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <DialogTitle as="h3" className="text-3xl font-semibold text-white">
                    {modo === "agregar" ? "Nuevo Producto" : "Editar Producto"}
                  </DialogTitle>
                  <div className="mt-2">  
          
                    <form onSubmit={handleSubmit}>
            
                      <div class="flex gap-9">
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
                      </div>

                      <div class="flex gap-9">
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

                        <div class="my-4 w-full">
                          <label>Categoria:</label>
                          <br/>
                          <select 
                            class="border-2 border-black rounded-md bg-[#DDD0C8] text-black pl-1 w-full h-7" 
                            name='category'
                            value={producto.category || ""}
                            onChange={handleChange}
                            required
                            >

                            <option value="" disabled selected hidden></option>
                            <option value="Indumentaria">Indumentaria</option>
                            <option value="Accesorios">Accesorios</option>

                          </select>
                          {errores.category && <p>{errores.category}</p>}
                        </div>
                      </div>

                      <div class="my-4">
                        <label>Descripcion:</label>
                        <br/>
                        <textarea
                          class="border-2 border-black rounded-md bg-[#DDD0C8] text-black pl-1 w-full"
                          name='description'
                          value={producto.description || ""}
                          onChange={handleChange}
                          required
                        />
                        {errores.description && <p>{errores.description}</p>}
                      </div>
                      
                      
                      <div class="flex gap-6 mt-9">
                        <button type='submit' class="bg-[#DDD0C8] text-black font-semibold py-2 px-2 border-2 border-transparent hover:border-black rounded text-sm cursor-pointer ml-auto">
                          {modo === "agregar" ? <>Agregar Producto</> : <>Editar</>}
                        </button>

                        <button onClick={cerrar} 
                          class="bg-red-400 text-black font-semibold py-2 px-2 border-2 border-red-400 hover:border-black rounded text-sm cursor-pointer">
                          Cancelar
                        </button>
                      </div>

                    </form>
                
                  </div> 
                </div>
              </div> 
            </div>
          </DialogPanel>
        </div>
      </div>    
        
        
    </Dialog>
  )
}

export default ProductoForm