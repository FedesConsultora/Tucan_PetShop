import { useState } from 'react';
import './Footer.scss';
import Testimonios from '../sections/testimonios/Testimonios';
import Logo2 from '../../assets/img/logo-2.png';

const Footer = () => {
  const [mapUrl, setMapUrl] = useState("https://www.google.com/maps/d/u/0/embed?mid=1TbN9jFojVaEFzMfSoK7zYTYg99NZ_sU&ehbc=2E312F&noprof=1");

  const locations = [
    {
      name: "Camino Belgrano y 516",
      fullAddress: "1558 RP1, B1902 Gonnet, Provincia de Buenos Aires +54 221 539-9399",
      embedUrl: "https://www.google.com/maps/d/u/0/embed?mid=1TbN9jFojVaEFzMfSoK7zYTYg99NZ_sU&ehbc=2E312F&noprof=1&ll=-34.893770, -58.008701&z=17"
    },
    {
      name: "32 e/ 6 y 7",
      fullAddress: "Av. 32 560, B1900 La Plata, Provincia de Buenos Aires",
      embedUrl: "https://www.google.com/maps/d/u/0/embed?mid=1TbN9jFojVaEFzMfSoK7zYTYg99NZ_sU&ehbc=2E312F&noprof=1&ll=-34.898283,-57.981124&z=17"
    },
    {
      name: "18 esq. 50",
      fullAddress: "B1900ATS, C. 50 1143-1149, B1900ATS La Plata, Provincia de Buenos Aires",
      embedUrl: "https://www.google.com/maps/d/u/0/embed?mid=1TbN9jFojVaEFzMfSoK7zYTYg99NZ_sU&ehbc=2E312F&noprof=1&ll=-34.923331,-57.974149&z=17"
    }
  ];

  return (
    <footer className="footer" id="footer">
      {/* Testimonios slider sits on top of footer */}
      <Testimonios />

      {/* Footer body with Intersect background */}
      <div className="footer__body">
        <div className="footer__content">
          {/* Left – Logo + map placeholder */}
          <div className="footer__left">

            <div className="footer__map-placeholder">
              <div className="footer__map-placeholder__logo">
                <img src={Logo2} alt="Tucán Pet Shop" />
              </div>
              <div className="footer__map-iframe-wrapper">
                <iframe 
                  src={mapUrl} 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }}
                  allowFullScreen="" 
                  loading="lazy" 
                  title="Google Maps"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Right – Contact info */}
          <div className="footer__right">
            <h3 className="footer__title">HORARIOS DE ATENCIÓN</h3>
            <p className="footer__schedule">Lunes a Domingos de 08:00 hs a 21:00 hs.</p>

            <div className="footer__contact-list">
              <a href="https://www.instagram.com/tucansuperdemascotas/" target="_blank" rel="noopener noreferrer" className="footer__contact-item">
                <svg className="footer__icon" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                <span>tucansuperdemascotas</span>
              </a>

              <a href="https://wa.me/5402215399399" target="_blank" rel="noopener noreferrer" className="footer__contact-item">
                <svg className="footer__icon" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>0221 539-9399</span>
              </a>

              <a href="mailto:tucanpetshop@gmail.com" className="footer__contact-item">
                <svg className="footer__icon" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <span>tucanpetshop@gmail.com</span>
              </a>

              {/* Separator or title for locations could go here if needed */}
              <div className="footer__locations">
                {locations.map((loc, index) => (
                  <div 
                    key={index} 
                    className={`footer__contact-item footer__location-item ${mapUrl === loc.embedUrl ? 'is-active' : ''}`}
                    onClick={() => setMapUrl(loc.embedUrl)}
                  >
                    <svg className="footer__icon" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                    <div className="footer__location-text">
                      <span className="footer__location-name">{loc.name}</span>
                      <span className="footer__location-address">{loc.fullAddress}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer__bottom">
          <p>© 2026 TUCAN Tu tienda de mascotas. Todos los derechos reservados.</p>
          <p>Desarrollado por <a href="https://fedes.ai/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', cursor: 'pointer' }}><strong>Fedes Consultora</strong></a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;