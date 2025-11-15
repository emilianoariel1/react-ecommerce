import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav class="items-center">
      <ul class="flex gap-x-5">
        <li>
          <Link to={"/"} class="hover:underline">Inicio</Link>
        </li>
        <li>
          <Link to={"/indumentaria"} class="hover:underline">Indumentaria</Link>
        </li>
        <li>
          <Link to={"/accesorios"} class="hover:underline">Accesorios</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav