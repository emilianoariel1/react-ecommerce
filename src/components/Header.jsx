import Nav from "./Nav"
import { FaCartShopping } from "react-icons/fa6"
import { BsBagHeart } from "react-icons/bs"
import { Link } from "react-router-dom"
import { useAuthContext } from "../context/AuthContext"
import { useCarritoContext } from "../context/CarritoContext"
import BarraBusqueda from "./BarraBusqueda"
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const Header = () => {

  const {usuario, cerrarSesion} = useAuthContext()
  const logeado = !!usuario
  const esAdmin = usuario?.role === 'admin'
  const { carrito } = useCarritoContext()

  return (
    <header class="flex items-center justify-between mt-1 border-b pb-4 pt-2">
      <Link to={"/"} class="flex items-center gap-2">
        <BsBagHeart class="text-3xl"/>
        <p class="text-xl mt-0.5">Emi Store</p>
      </Link>
        <Nav />
      <div class="flex gap-4 items-center">
        <BarraBusqueda />

        {
          logeado ?
          <Menu as="div" className="relative inline-block">
            <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-[#DDD0C8] inset-ring-1 inset-ring-white/5 hover:bg-white/20 hover:cursor-pointer">
              {usuario.username}
              <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
            </MenuButton>

            <MenuItems
              transition
              className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-[#323232] outline-1 -outline-offset-1 outline-white/10 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in border"
            >
              <div className="py-1">
                {
                  esAdmin ?
                    <MenuItem>
                      <Link to={"/admin"} className="block px-4 py-2 text-sm text-[#DDD0C8] data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden">
                        Panel del Admin
                      </Link>
                    </MenuItem>
                  :
                  <></>
                }
              
                <MenuItem>
                  <p onClick={cerrarSesion} class="block px-4 py-2 text-sm text-[#DDD0C8] data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden hover:cursor-pointer">
                    Cerrar Sesion
                  </p>
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>
          :
          <Link to={"/login"}>
            <p class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white inset-ring-1 inset-ring-white/5 hover:bg-white/20 hover:cursor-pointer">
              Iniciar Sesion
            </p>
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