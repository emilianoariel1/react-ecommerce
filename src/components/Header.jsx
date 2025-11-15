import Nav from "./Nav"
import { FaCartShopping } from "react-icons/fa6"
import { BsBagHeart } from "react-icons/bs"
import { Link } from "react-router-dom"
import { useAuthContext } from "../context/AuthContext"
import { useCarritoContext } from "../context/CarritoContext"

const Header = () => {

  const {usuario, cerrarSesion} = useAuthContext()
  const logeado = !!usuario
  const { carrito } = useCarritoContext()

  return (
    <header class="flex items-center justify-between mt-1 border-b pb-4 pt-2">
      <Link to={"/"} class="flex items-center gap-2">
        <BsBagHeart class="text-3xl"/>
        <p class="text-xl mt-0.5">Emi Store</p>
      </Link>
        <Nav />
      <div class="flex gap-4 items-center">
        {
          logeado ?
          <button onClick={cerrarSesion} class="hover:underline cursor-pointer">Cerrar Sesion</button>
          :
          <Link to={"/login"}>
          <p class="hover:underline cursor-pointer">Iniciar Sesion</p>
          </Link>
        }
        
        <Link to={"/carrito"}>
          <FaCartShopping class="text-2xl cursor-pointer" />
          {
            carrito.length > 0 &&
            <span class="absolute top-[1%] right-[14.5%] bg-[#ff4757] text-white rounded-[50%] w-[19px] h-[19px] flex items-center justify-center text-[0.8em] font-bold">{carrito.length}</span>
          }
        </Link>
      </div>
    </header>
  )
}

export default Header