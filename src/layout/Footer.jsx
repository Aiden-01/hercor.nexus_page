import React from 'react';
import { NavLink } from 'react-router-dom';

const css = `
  .hn-footer {
    background: #080810;
    border-top: 1px solid rgba(255,255,255,0.07);
    font-family: 'DM Sans', sans-serif;
    padding: 2.5rem 1.5rem;
  }
  .hn-footer-inner {
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;
  }
  .hn-footer-brand {
    font-family: 'Syne', sans-serif;
    font-weight: 800;
    font-size: .95rem;
    color: #f0f0f8;
    letter-spacing: -.02em;
    text-decoration: none;
  }
  .hn-footer-brand em { color: #4f6ef7; font-style: normal; }
  .hn-footer-copy {
    font-size: .78rem;
    color: #6b6b88;
  }
  .hn-footer-links {
    display: flex;
    gap: 1.25rem;
    list-style: none;
    margin: 0; padding: 0;
  }
  .hn-footer-links a {
    font-size: .78rem;
    color: #6b6b88;
    text-decoration: none;
    letter-spacing: .05em;
    text-transform: uppercase;
    transition: color .2s;
  }
  .hn-footer-links a:hover { color: #f0f0f8; }

  @media (max-width: 600px) {
    .hn-footer-inner { flex-direction: column; align-items: center; text-align: center; }
  }
`;

export const Footer = () => {
  const anio = new Date().getFullYear();

  return (
    <>
      <style>{css}</style>
      <footer className="hn-footer">
        <div className="hn-footer-inner">
          <NavLink to="/inicio" className="hn-footer-brand">
            <em>hercor</em>.nexus
          </NavLink>
          <span className="hn-footer-copy">
            {anio} © hercor.nexus — Todos los derechos reservados.
          </span>
          <ul className="hn-footer-links">
            <li><NavLink to="/portafolio">Portafolio</NavLink></li>
            <li><NavLink to="/servicios">Servicios</NavLink></li>
            <li><NavLink to="/contacto">Contacto</NavLink></li>
          </ul>
        </div>
      </footer>
    </>
  );
};