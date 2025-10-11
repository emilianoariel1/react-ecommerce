import Header from './components/Header';
import Inicio from './pages/Inicio';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom'
import DetalleProducto from './pages/DetalleProducto';
import Moda from './pages/Moda';
import Computacion from './pages/Computacion';


function App() {

  return (
    <>
      <Header />
      
      <Routes>
        <Route path={'/'} element={<Inicio />} />
        <Route path={'/producto/:id'} element={<DetalleProducto/>}/>
        <Route path={'/moda'} element={<Moda/>}/>
        <Route path={'/computacion'} element={<Computacion/>}/>
      </Routes>

      <Footer />
    </>
  )
}

export default App
