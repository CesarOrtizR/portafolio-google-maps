import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Marcadores from './components/Marcadores';
import Rutas from './components/Rutas';
import Clustering from './components/Clustering';
import Autocompletado from './components/Autocompletado';
import Drawing from './components/Drawing';


function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
        <Link className="navbar-brand" to="/">Portafolio Maps</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon bg-light"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/marcadores">Marcadores</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/rutas">Rutas</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/clustering">Clustering</Link>
            </li>
            <li className="nav-item"><Link className="nav-link" to="/autocompletado">Autocompletado</Link>
            </li>
            <li className="nav-item"><Link className="nav-link" to="/drawing">Dibujo</Link>
            </li>

          </ul>
        </div>
      </nav>

      <div className="container mt-4">
        <Routes>
          <Route path="/autocompletado" element={<Autocompletado />} />
          <Route path="/drawing" element={<Drawing />} />

          <Route path="/" element={<Home />} />
          <Route path="/marcadores" element={<Marcadores />} />
          <Route path="/rutas" element={<Rutas />} />
          <Route path="/clustering" element={<Clustering />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

