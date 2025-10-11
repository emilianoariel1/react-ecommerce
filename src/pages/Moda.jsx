import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { SyncLoader } from "react-spinners"

const Moda = () => {
  
    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)
    const [error, setError] = useState(null)
      
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => data.filter((prod) => prod.category !== "electronics"))
        .then(
            data => {
            setProductos(data)
            setCargando(false)
            }
          )
        .catch(err => {
            setError(err)
            setCargando(false)
            }
          )
      }, [])
    
      if(cargando)
        return <div class="text-center my-10"><SyncLoader color="#DDD0C8" size="30" /></div>
      
      if(error)
        return <p>{error}</p>
  
    return (
    <div class="mt-10">
        
        <p class="text-4xl underline mb-10">Nuestros productos de Moda</p>
        
        {productos.map((prod, index) => (
          <div key={index} class="flex my-5 gap-7 items-center border rounded-md px-2 py-3">
            <Link to={`/producto/${prod.id}`} class="flex items-center gap-4">
              <img src={prod.image} class="w-16 h-16"/>
              <p class="">{prod.title}: {prod.price}$</p>
            </Link>
          </div>
        ))}

    </div>
  )
}

export default Moda