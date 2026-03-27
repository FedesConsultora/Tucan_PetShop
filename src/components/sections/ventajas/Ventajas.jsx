import './Ventajas.scss';
import VPurple from '../../../assets/img/v-purple.png';

const ventajasData = [
  {
    title: 'ATENCIÓN PERSONALIZADA',
    description: 'No hablamos con robots, te asesoramos según las necesidades de tu mascota.',
  },
  {
    title: 'ENVÍOS RÁPIDOS',
    description: 'Recibe tu pedido en la puerta de tu casa sin complicaciones.',
  },
  {
    title: 'VARIEDAD REAL',
    description: 'Tenemos stock permanente de las marcas líderes del mercado.',
  },
];

const Ventajas = () => {
  return (
    <section id="ventajas" className="ventajas-section">
      {/* Purple decorative wave */}
      <img src={VPurple} alt="" className="ventajas-purple-wave" aria-hidden="true" />

      <div className="ventajas-container">
        <div className="ventajas-card">
          {/* Left – 3D mascot video */}
          <div className="ventajas-mascot">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="ventajas-mascot__video"
            >
              <source src="/src/assets/img/dog-3d.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Right – content */}
          <div className="ventajas-content">
            <h2 className="ventajas-content__title">
              ¿POR QUÉ<br />
              ELEGIR TUCÁN?
            </h2>

            <div className="ventajas-list">
              {ventajasData.map((item, index) => (
                <div className="ventajas-item" key={index}>
                  <h3 className="ventajas-item__title">{item.title}</h3>
                  <p className="ventajas-item__desc">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ventajas;
