import { Link } from "react-router-dom"

const Admin = () => {
  return (
    <div class="mt-8 mb-8">
        <p class="text-4xl mb-10">Panel del Admin</p>

        <Link to={"/gestionProductos"}>
            <button  
                class="bg-[#DDD0C8] text-black font-semibold py-2 px-2 border-2 border-transparent hover:border-black rounded text-sm cursor-pointer ml-auto">
                Gestionar Productos
            </button>
        </Link>
    </div>
  )
}

export default Admin