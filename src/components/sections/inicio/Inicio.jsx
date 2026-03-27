import './Inicio.scss';

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
    </section>
  );
};

export default Inicio;
