import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav class="items-center">
      <ul class="flex gap-x-5">
        <li>
          <Link to={"/"} class="hover:underline">Inicio</Link>
        </li>
        <li>
          <Link to={"/moda"} class="hover:underline">Moda</Link>
        </li>
        <li>
          <Link to={"/computacion"} class="hover:underline">Computación</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav