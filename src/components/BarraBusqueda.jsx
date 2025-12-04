import { useBusqueda } from "../context/BusquedaContext"
import { useNavigate } from "react-router-dom"

const BarraBusqueda = () => {

  const { busqueda, setBusqueda } = useBusqueda()
  const navigate = useNavigate()
  
  const handleSearch = (e) => {
    const value = e.target.value
    setBusqueda(value)

    if (value.trim()) {
      navigate("/busqueda")
    }
  }

  return (
    <form>
        <input 
            type="search"
            id="search"
            className="bg-[#DDD0C8] text-black pl-1 rounded"
            placeholder="🔎 Buscar..."
            value={busqueda}
            onChange={handleSearch}
        />
    </form>
  )
}

export default BarraBusqueda