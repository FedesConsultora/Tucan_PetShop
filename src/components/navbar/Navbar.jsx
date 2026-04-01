import { useState, useEffect, useCallback } from 'react';
import './Navbar.scss';
import Logo from '../../assets/img/logo.png';

const navItems = [
  { id: 'inicio',      label: 'Inicio' },
  { id: 'promos',      label: 'Promos' },
  { id: 'servicios',   label: 'Servicios' },
  { id: 'ventajas',    label: 'Ventajas' },
  { id: 'testimonios', label: 'Testimonios' },
];

const Navbar = () => {
  const [isVisible,      setIsVisible]      = useState(true);
  const [lastScrollY,    setLastScrollY]    = useState(0);
  const [activeSection,  setActiveSection]  = useState('inicio');
  const [menuOpen,       setMenuOpen]       = useState(false);

  /* ── hide / show navbar on scroll ── */
  const controlNavbar = useCallback(() => {
    const current = window.scrollY;
    if (current > lastScrollY && current > 100) {
      setIsVisible(false);
      setMenuOpen(false);          // close drawer when scrolling down
    } else {
      setIsVisible(true);
    }
    setLastScrollY(current);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar, { passive: true });
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [controlNavbar]);

  /* ── active section detection ── */
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => sections.forEach((s) => observer.unobserve(s));
  }, []);

  /* ── lock body scroll when drawer is open ── */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  /* ── smooth scroll helper ── */
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMenuOpen(false);
  };

  return (
    <>
      <nav className={`navbar${!isVisible ? ' nav--hidden' : ''}`}>
        <div className="navbar__container">

          {/* Logo */}
          <button className="navbar__logo" onClick={() => scrollTo('inicio')} aria-label="Ir al inicio">
            <img src={Logo} alt="Tucán PetShop" />
          </button>

          {/* Desktop links */}
          <ul className="navbar__links">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={activeSection === item.id ? 'active' : ''}
                  onClick={(e) => { e.preventDefault(); scrollTo(item.id); }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Hamburger button – mobile only */}
          <button
            className={`navbar__burger${menuOpen ? ' is-open' : ''}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>

        </div>
      </nav>

      {/* ── Mobile drawer ── */}
      <div
        className={`nav-drawer${menuOpen ? ' is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menú de navegación"
      >
        <div className="nav-drawer__header">
          <img src={Logo} alt="Tucán PetShop" className="nav-drawer__logo" />
          <button
            className="nav-drawer__close"
            onClick={() => setMenuOpen(false)}
            aria-label="Cerrar menú"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          </button>
        </div>

        <ul className="nav-drawer__links">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                className={`nav-drawer__item${activeSection === item.id ? ' is-active' : ''}`}
                onClick={() => scrollTo(item.id)}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="nav-drawer__dot" aria-hidden="true" />
                )}
              </button>
            </li>
          ))}
        </ul>

        <div className="nav-drawer__footer">
          <p>Lunes a Domingos · 08:00 – 21:00 hs</p>
          <a href="https://wa.me/5402215399399?text=¡Hola!%20Quisiera%20hacer%20un%20pedido" target="_blank" rel="noopener noreferrer">
            WhatsApp: 0221 539-9399
          </a>
        </div>
      </div>

      {/* Backdrop */}
      {menuOpen && (
        <div
          className="nav-backdrop"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Navbar;
