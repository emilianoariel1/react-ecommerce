import { Navigate } from "react-router-dom"
import { useAuthContext } from "../context/AuthContext"

const RutaAdmin = ({children}) => {
  const { usuario } = useAuthContext()
  
  if(!usuario)
    return <Navigate to="/login" replace />
  
  if(usuario.role === "usuario")
    return <Navigate to="/" replace />
  
  return children
}

export default RutaAdmin