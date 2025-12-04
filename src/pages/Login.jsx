import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext'
import { ToastContainer, toast } from 'react-toastify'

const Login = () => {
  
  const [usuario, setUsuario] = useState('')
  const [password, setPassword] = useState('')
  
  const { iniciarSesion } = useAuthContext()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    if(iniciarSesion(usuario, password)) {
      navigate('/')
    } else {
      toast.error('Nombre de Usuario o Contraseña incorrecto')
    }
  }

  return (
    <>
        <p class="text-4xl mb-10 mt-8">Iniciar Sesion</p>

        <form onSubmit={handleSubmit} class="border rounded-md px-5 py-6 text-2xl mb-10">
            
            <div class="flex gap-2">
                <label>Usuario:</label>
                <input 
                    class="border-2 border-black rounded-md bg-[#DDD0C8] text-black pl-1"
                    type='text'
                    value={usuario}
                    onChange={(e) => setUsuario(e.target.value)}
                />
            </div>
        
            <div class="flex gap-2 my-7">
                <label>Contraseña:</label>
                <input 
                    class="border-2 border-black rounded-md bg-[#DDD0C8] text-black pl-1"
                    type='text'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            
            <div>
            <button type='submit' class="bg-[#DDD0C8] text-black font-semibold py-2 px-2 border-2 border-transparent hover:border-black rounded text-xs cursor-pointer">Iniciar Sesion</button>
            </div>

        </form>

        <ToastContainer position="bottom-right" theme="dark" />
    </>
  )
}

export default Login