import { useContext } from 'react'
import { useState } from 'react'
import { createContext } from 'react'

const AuthContext = createContext()

const USUARIOS = [
  { 
    id: 1, 
    username: 'admin', 
    password: '1234', 
    role: 'admin'
  },
  { 
    id: 2, 
    username: 'emiliano', 
    password: '1234', 
    role: 'usuario'
  }
]

export const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null)
  
  const iniciarSesion = (username, password) => {

    const usuario = USUARIOS.find(
      u => u.username === username && u.password === password
    )

    if(usuario) {
      const token = `fake-token-${username}`
      localStorage.setItem('authToken', token)
      setUsuario(usuario)
      return true
    }
    
    return false
  }

  const cerrarSesion = () => {
    localStorage.removeItem('authToken')
    setUsuario(null)
  }

  return (
    <AuthContext.Provider value={{usuario, iniciarSesion, cerrarSesion}}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => useContext(AuthContext)