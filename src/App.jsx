import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Inicio from './components/sections/inicio/Inicio';
import RedCurve from './components/red-curve/RedCurve';
import Promos from './components/sections/promos/Promos';
import Divider from './components/divider/Divider';
import Servicios from './components/sections/servicios/Servicios';
import Ventajas from './components/sections/ventajas/Ventajas';
import './scss/main.scss';
import Footer from './components/footer/Footer';

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Navbar />

        <main>
          <div className="inicio-promos-wrapper">
            <Inicio />
            {/* <RedCurve /> */}
            <Promos />
          </div>
          <Divider />
          <Servicios />
          <Ventajas />
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
