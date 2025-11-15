import Header from './components/Header'
import Inicio from './pages/Inicio'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import DetalleProducto from './pages/DetalleProducto'
import Indumentaria from './pages/Indumentaria'
import Accesorios from './pages/Accesorios'
import Carrito from './pages/Carrito'
import Login from './pages/Login'
import RutaProtegida from './components/RutaProtegida'
import Admin from './pages/Admin'
import GestionProductos from './components/GestionProductos'

function App() {

  return (
    <>
      <Header />
      
      <Routes>
        <Route path={'/'} element={<Inicio />} />
        <Route path={'/producto/:id'} element={<DetalleProducto/>}/>
        <Route path={'/indumentaria'} element={<Indumentaria/>}/>
        <Route path={'/accesorios'} element={<Accesorios/>}/>
        
        <Route 
          path={'/carrito'} 
          element={
          <RutaProtegida>
            <Carrito />
          </RutaProtegida>
          }
        />

        <Route 
          path={'/admin'} 
          element={
          <RutaProtegida>
            <Admin />
          </RutaProtegida>
          }
        />

        <Route 
          path={'/gestionProductos'} 
          element={
          <RutaProtegida>
            <GestionProductos />
          </RutaProtegida>
          }
        />

        <Route path={'/login'} element={<Login />}/>
      </Routes>

      <Footer />
    </>
  )
}

export default App
