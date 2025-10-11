import Carrito from "../components/Carrito";
import ListaProductos from "../components/ListaProductos";
import { useEffect, useState } from "react";

const Inicio = () => {
  
  const [productosCarrito, setProductosCarrito] = useState([])
  const [carritoVacio , setCarritoVacio] = useState(true)

  const agregarAlCarrito = (producto) => {
    setProductosCarrito([...productosCarrito, producto])
  }

  const quitarDelCarrito = (idProducto) => {
    setProductosCarrito(productosCarrito.filter((_, indice) => indice !== idProducto))
  }

  const vaciarCarrito = () => {
    setProductosCarrito([])
  }

  useEffect(() => {
    productosCarrito.length === 0 ? setCarritoVacio(true) : setCarritoVacio(false)
  }, [productosCarrito])
  
    return (
    <div>
      <ListaProductos agregarAlCarrito={agregarAlCarrito}/>

      <Carrito productosCarrito={productosCarrito} 
      carritoVacio={carritoVacio} 
      quitarDelCarrito={quitarDelCarrito}
      vaciarCarrito={vaciarCarrito} />
    </div>
  )
}

export default Inicio