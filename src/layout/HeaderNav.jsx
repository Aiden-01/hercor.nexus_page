import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Sans:wght@300;400;500&display=swap');
  :root {
    --black: #080810; --border: rgba(255,255,255,0.07);
    --white: #f0f0f8; --muted: #6b6b88; --accent: #4f6ef7;
  }
  .hn-nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 200;
    transition: background .3s, backdrop-filter .3s, border-color .3s;
    border-bottom: 1px solid transparent;
    font-family: 'DM Sans', sans-serif;
  }
  .hn-nav.scrolled {
    background: rgba(8,8,16,0.88);
    backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(18px);
    border-color: var(--border);
  }
  .hn-nav-inner {
    max-width: 1100px; margin: 0 auto; padding: 0 1.5rem;
    height: 68px; display: flex; align-items: center; justify-content: space-between;
  }
  .hn-brand { display: flex; align-items: center; gap: .75rem; text-decoration: none; }
  .hn-brand-logo {
    width: 38px; height: 38px; border-radius: 9px; overflow: hidden;
    border: 1px solid rgba(79,110,247,0.3); flex-shrink: 0;
  }
  .hn-brand-logo img { width: 100%; height: 100%; object-fit: cover; display: block; }
  .hn-brand-text {
    font-family: 'Syne', sans-serif; font-weight: 800;
    font-size: 1.05rem; color: var(--white); letter-spacing: -.02em; line-height: 1;
  }
  .hn-brand-text em { color: var(--accent); font-style: normal; }
  .hn-brand-sub { font-size: .65rem; color: var(--muted); letter-spacing: .1em; text-transform: uppercase; margin-top: .15rem; }
  .hn-nav-links { display: flex; align-items: center; gap: .25rem; list-style: none; margin: 0; padding: 0; }
  .hn-nav-links a {
    display: block; padding: .45rem .85rem;
    font-size: .82rem; font-weight: 500; letter-spacing: .05em; text-transform: uppercase;
    color: var(--muted); text-decoration: none; border-radius: 8px; transition: color .2s, background .2s;
  }
  .hn-nav-links a:hover { color: var(--white); background: rgba(255,255,255,0.05); }
  .hn-nav-links a.activo { color: var(--white); }
  .hn-nav-cta {
    display: inline-flex; align-items: center; padding: .45rem 1.1rem;
    background: var(--accent); color: #fff; border-radius: 8px;
    font-size: .82rem; font-weight: 500; text-decoration: none;
    transition: box-shadow .2s, transform .2s;
    box-shadow: 0 0 16px rgba(79,110,247,.3);
    text-transform: uppercase; letter-spacing: .05em;
  }
  .hn-nav-cta:hover { box-shadow: 0 0 28px rgba(79,110,247,.55); transform: translateY(-1px); color: #fff; text-decoration: none; }
  .hn-hamburger {
    display: none; flex-direction: column; gap: 5px;
    background: none; border: none; cursor: pointer; padding: .5rem; z-index: 210;
  }
  .hn-hamburger span { display: block; width: 22px; height: 2px; background: var(--white); border-radius: 2px; transition: transform .3s, opacity .3s; }
  .hn-hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
  .hn-hamburger.open span:nth-child(2) { opacity: 0; }
  .hn-hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
  .hn-mobile-menu {
    position: fixed; inset: 0; z-index: 190;
    background: rgba(8,8,16,0.97); backdrop-filter: blur(20px);
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    gap: .5rem; opacity: 0; pointer-events: none; transition: opacity .3s;
  }
  .hn-mobile-menu.open { opacity: 1; pointer-events: all; }
  .hn-mobile-menu a {
    font-family: 'Syne', sans-serif; font-weight: 700;
    font-size: clamp(1.8rem, 6vw, 2.5rem); color: var(--muted);
    text-decoration: none; letter-spacing: -.02em; transition: color .2s; padding: .25rem 0;
  }
  .hn-mobile-menu a:hover, .hn-mobile-menu a.activo { color: var(--white); }
  .hn-mobile-cta {
    margin-top: 1.5rem; background: var(--accent) !important;
    border-radius: 10px; padding: .85rem 2.5rem !important;
    font-size: 1rem !important; color: #fff !important;
    box-shadow: 0 0 24px rgba(79,110,247,.4);
  }
  @media (max-width: 768px) { .hn-nav-links { display: none; } .hn-hamburger { display: flex; } }
  .hn-spacer { height: 68px; background: #080810; }
`;

const LINKS = [
  { to: '/inicio', label: 'Inicio' },
  { to: '/portafolio', label: 'Portafolio' },
  { to: '/servicios', label: 'Servicios' },
  { to: '/curriculum', label: 'Curriculum' },
];

export const HeaderNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <style>{css}</style>
      <div className="hn-spacer" />
      <nav className={`hn-nav${scrolled ? ' scrolled' : ''}`}>
        <div className="hn-nav-inner">
          <NavLink to="/inicio" className="hn-brand" onClick={() => setOpen(false)}>
            <div className="hn-brand-logo">
              <img src={`${import.meta.env.BASE_URL}images/logo.png`} alt="logo" />
            </div>
            <div>
              <div className="hn-brand-text"><em>hercor</em>.nexus</div>
              <div className="hn-brand-sub">Software Studio</div>
            </div>
          </NavLink>

          <ul className="hn-nav-links">
            {LINKS.map(l => (
              <li key={l.to}>
                <NavLink to={l.to} className={({ isActive }) => isActive ? 'activo' : ''}>
                  {l.label}
                </NavLink>
              </li>
            ))}
            <li>
              <NavLink to="/contacto" className="hn-nav-cta">Contacto</NavLink>
            </li>
          </ul>

          <button
            className={`hn-hamburger${open ? ' open' : ''}`}
            onClick={() => setOpen(o => !o)}
            aria-label="Menú"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`hn-mobile-menu${open ? ' open' : ''}`}>
        {LINKS.map(l => (
          <NavLink
            key={l.to} to={l.to}
            className={({ isActive }) => isActive ? 'activo' : ''}
            onClick={() => setOpen(false)}
          >
            {l.label}
          </NavLink>
        ))}
        <NavLink to="/contacto" className="hn-mobile-cta" onClick={() => setOpen(false)}>
          Contacto →
        </NavLink>
      </div>
    </>
  );
};