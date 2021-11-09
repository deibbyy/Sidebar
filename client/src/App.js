import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './componentes/Navbar';
import Home from './Paginas/Home';
import Ventas from './Paginas/Ventas';
import Clientes from './Paginas/Clientes';

function App() {
  return (
    <Router>
      <div className="flex">
        <div className="content">
          <Navbar />
          <Routes>
          <Route path = "/"  exact={true} element={<Home/>} />
          <Route path = "/ventas"  exact={true} element={<Ventas/>}  />
          <Route path = "/clientes"  exact={true} element={<Clientes/>}  />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
