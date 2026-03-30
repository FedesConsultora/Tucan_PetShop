import './Inicio.scss';
import vRed from '../../../assets/img/v-red.png';

const Inicio = () => {
  return (
    <section id="inicio" className="inicio-section">
      <div className="hero-container">
        <h1 className="hero-text">
          <span className="hero-text--yellow">Todo lo que tu mascota ama,</span>
          <span className="hero-text--dark">a un solo clic de distancia.</span>
        </h1>
        <button className="cta-btn">
          ¡Hacer mi pedido ahora!
        </button>
      </div>

      <img src={vRed} alt="" className="hero-red-curve" aria-hidden="true" />
    </section>
  );
};

export default Inicio;
