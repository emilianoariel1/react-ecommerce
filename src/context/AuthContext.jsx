import { useContext } from 'react'
import { useState } from 'react'
import { createContext } from 'react'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null)
  
  const iniciarSesion = (username) => {
    const token = `fake-token-${username}`
    localStorage.setItem('authToken', token)
    setUsuario(username)
  }

  const cerrarSesion = () => {
    localStorage.removeItem('authToken')
    setUsuario(null)
  };

  return (
    <AuthContext.Provider value={{usuario, iniciarSesion, cerrarSesion}}>
      {children}
    </AuthContext.Provider>
  ); 
}

export const useAuthContext = () => useContext(AuthContext)