import { useState, useEffect, createContext, useContext } from 'react'
import { toast } from 'react-toastify'

const ProductoContext = createContext()

export const ProductoProvider = ({ children }) => {

  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)

  const API = "https://68d886302144ea3f6da841f7.mockapi.io/productos"

  const cargarProductos = async () => {
    try {
      setCargando(true)
      setError(null)

      const res = await fetch(API)
      if (!res.ok) throw new Error(`Error HTTP: ${res.status}`);
        

      const data = await res.json()
      setProductos(data)

    } catch (err) {
      console.error("Error en la carga de productos: ", err)
      setError(err.message || "Error al cargar los productos")

    } finally {
      setCargando(false)
    }
  }

  useEffect(() => {
    cargarProductos()
  }, [])

  // funcion para agregar un producto
  const agregarProducto = async (producto) => {
    try {
      setError(null)

      const respuesta = await fetch(API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(producto)
      })

      if (!respuesta.ok) 
        throw new Error("Error al agregar el producto.")

      const nuevoProducto = await respuesta.json()
      console.log("Producto agregado: ", nuevoProducto)
      toast.success("Producto agregado correctamente")

      setProductos([...productos, nuevoProducto])

    } catch (error) {
        console.error(error.message)
        setError("Hubo un problema al agregar el producto.")
        toast.error("Hubo un problema al agregar el producto")
    }
  }

  // funcion para editar un producto
  const editarProducto = async (producto) => {
    try {
      setError(null)
      
      const res = await fetch(`${API}/${producto.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(producto),
      })

      if (!res.ok) 
        throw new Error(`Error HTTP: ${res.status}`)

      const productoEditado = await res.json()
      console.log("Producto editado: ", productoEditado)
      toast.success("Producto editado correctamente")

      setProductos(productos.map(prod =>
        prod.id === productoEditado.id ? productoEditado : prod
      ))
      
    } catch (err) {
      console.error(err.message)
      alert("Hubo un error al actualizar producto.")
      toast.error("Hubo un problema al editar el producto")
    }
  }

  // funcion para eliminar un producto
  const eliminarProducto = async (id) => {
    const confirmar = window.confirm("¿Estás seguro de eliminar?");

    if (confirmar) {
      try {
        const res = await fetch(`${API}/${id}`, {
            method: "DELETE",
          }
        )

        if (!res.ok) 
          throw new Error("Error al eliminar") 
    
        setProductos(productos.filter(p => p.id !== id))
        toast.success("Producto eliminado correctamente")
      } 
      catch (err) {
        console.error(err.message);
        toast.error("Hubo un problema al eliminar el producto.")
      }
    }
  }

  return (
    <ProductoContext.Provider value={{
        productos,
        cargando,
        error,
        cargarProductos,
        agregarProducto,
        editarProducto,
        eliminarProducto
    }}>
        {children}
    </ProductoContext.Provider>
  )
}

export const useProductoContext = () => useContext(ProductoContext)