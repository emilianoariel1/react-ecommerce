import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer class="border-t py-9 text-center">
      
      <ul class="flex justify-center gap-10">
        <li>
          <Link class="hover:underline">Conocenos</Link>
        </li>
        <li>
          <Link class="hover:underline">Política de Privacidad</Link>
        </li>
      </ul>

      <p class="mt-5 text-[12px]">© 2025 Emi Store. Todos los derechos reservados.</p>

    </footer>
  )
}

export default Footer