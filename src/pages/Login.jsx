import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext'

const Login = () => {
  
  const [usuario, setUsuario] = useState('')
  const [password, setPassword] = useState('')
  
  const { iniciarSesion } = useAuthContext()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if(usuario == 'admin' && password == '1234') {
      iniciarSesion(usuario)
      navigate('/admin')
    } else {
      alert('Nombre de Usuario o Contraseña incorrecto')
    }
  }

  return (
    <>
        <p class="text-4xl mb-10 underline mt-8">Iniciar Sesion</p>

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
    </>
  )
}

export default Login