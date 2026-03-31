import './Inicio.scss';
import vRed from '../../../assets/img/v-red.png';

const Inicio = () => {
  return (
    <section id="inicio" className="inicio-section">
      <div className="hero-container">
        <h1 className="hero-text" style={{ lineHeight: '1.1' }}>
          <span className="hero-text--yellow">Todo lo que tu mascota ama, </span>
          <span className="hero-text--dark">a un solo clic de distancia.</span>
        </h1>
        <a
          href="https://wa.me/5402215399399?text=¡Hola!%20Quisiera%20hacer%20un%20pedido"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-btn"
        >
          ¡Hacer mi pedido ahora!
        </a>
      </div>

      <img src={vRed} alt="" className="hero-red-curve" aria-hidden="true" />
    </section>
  );
};

export default Inicio;
