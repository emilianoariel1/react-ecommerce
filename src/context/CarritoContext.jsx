import { createContext, useState, useContext } from "react"

const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  
    const [carrito, setCarrito] = useState([])

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto])
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