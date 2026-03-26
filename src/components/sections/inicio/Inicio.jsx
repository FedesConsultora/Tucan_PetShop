
import './Inicio.scss';

const Inicio = () => {
  return (
    <section id="inicio" className="inicio-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1>
            TODO LO QUE TU<br />
            MASCOTA AMA,
            <span>
              A UN SOLO CLIC<br />
              DE DISTANCIA.
            </span>
          </h1>
          <a href="#proyectos" className="cta-btn">¡Hacer mi pedido ahora!</a>
        </div>

        <div className="hero-image-wrapper">
          <img src="/src/assets/img/hero-pic.png" alt="Happy Pet and Owner" className="hero-pic" />
          <img src="/src/assets/img/v-red.png" alt="Decorative Wave" className="v-red" />
        </div>
      </div>
    </section>
  );
};

export default Inicio;
