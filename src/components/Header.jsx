import Nav from "./Nav"
import { FaCartShopping } from "react-icons/fa6";
import { BsBagHeart } from "react-icons/bs";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header class="flex items-center justify-between mt-1 border-b pb-4 pt-2">
      <Link to={"/"} class="flex items-center gap-2">
        <BsBagHeart class="text-3xl"/>
        <p class="text-xl mt-0.5">Emi Store</p>
      </Link>
        <Nav />
      <div class="flex gap-4 items-center">
        <p class="hover:underline cursor-pointer">Login</p>
        <FaCartShopping class="text-2xl cursor-pointer" />
      </div>
    </header>
  )
}

export default Header