import { useState, useEffect } from 'react';
import './Navbar.scss';
import Logo from '../../assets/img/logo.png'

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('inicio');

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const options = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // Detect when middle of section is in middle of viewport
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  const navItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'promos', label: 'Promos' },
    { id: 'servicios', label: 'Servicios' },
    { id: 'ventajas', label: 'Ventajas' },
    { id: 'testimonios', label: 'Testimonios' },
  ];

  return (
    <nav className={`navbar ${!isVisible ? 'nav--hidden' : ''}`}>
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="Tucan PetShop Logo" />
        </div>
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={activeSection === item.id ? 'active' : ''}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
