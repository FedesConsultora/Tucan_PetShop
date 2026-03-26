import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Inicio from './components/sections/inicio/Inicio';

import Servicios from './components/sections/servicios/Servicios';
import Ventajas from './components/sections/ventajas/Ventajas';
import Promos from './components/sections/promos/Promos';
import Testimonios from './components/sections/testimonios/Testimonios';
import './scss/main.scss';
import Footer from './components/footer/Footer';

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Navbar />

        <main>
          <Inicio />
          <Promos />
          <Servicios />
          <Ventajas />

          <Testimonios />
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
