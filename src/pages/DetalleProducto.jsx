import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { SyncLoader } from "react-spinners";

const DetalleProducto = () => {
  
  const {id} = useParams()
  const [producto, setProducto] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProducto(data))
      .catch(err => setError(err))
  }, [id])

  if(!producto)
    return <div class="text-center my-10"><SyncLoader color="#DDD0C8" size="30" /></div>
  
  if(error)
    return <p>{error}</p>

  return (
    <div class="my-5">
      <p class="text-2xl">{producto.title}</p>
      <p class="text-xl mt-5">Precio: {producto.price}$</p>
      <img src={producto.image} alt={producto.title} width={200} height={200}class="my-5"/>
      <p>{producto.description}</p>
    </div>
  )
}

export default DetalleProducto