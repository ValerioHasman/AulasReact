import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import BarraNavegacao from './components/layout/BarraNavegacao';
import Footer from './components/layout/Footer';
import Contato from './pages/Contato';
import Empresa from './pages/Empresa';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <BarraNavegacao />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/empresa' element={<Empresa/>} />
        <Route path='/contato' element={<Contato/>} />
      </Routes>
      <Footer />
    </Router>

  )
}

export default App;
