import { createContext, useState, useContext } from "react"
import { toast } from "react-toastify";

const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  
    const [carrito, setCarrito] = useState([])

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto])
    toast.success(`${producto.title} agregado al carrito`)
  }
  
  const quitarDelCarrito = (indiceAEliminar) => {
    setCarrito(carrito.filter((_, indice) => indice !== indiceAEliminar))
  }

  const vaciarCarrito = () => {
    setCarrito([])
  }

  return (
    <CarritoContext.Provider
      value={{ carrito, agregarAlCarrito, quitarDelCarrito, vaciarCarrito }}
    >
      {children}
    </CarritoContext.Provider>
  )
}

export const useCarritoContext = () => useContext(CarritoContext)