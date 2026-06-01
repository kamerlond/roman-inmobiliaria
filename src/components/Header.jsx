import { useState } from 'react'

const SunIcon = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>)
const MoonIcon = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>)
const MenuIcon = () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>)
const LockIcon = () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>)
const HouseIcon = () => (<svg width="22" height="22" viewBox="0 0 48 48" fill="none"><path d="M8 24L24 9l16 15" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M14 22v14h20V22" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M21 36V26h6v10" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round"/></svg>)

export function Header({ theme, onToggleTheme, onAdminClick }) {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <header className="site-header">
      <div className="wrap nav">
        <a href="#inicio" className="brand" aria-label="Roman Inmobiliaria">
          <div className="brand-logo-wrap" aria-hidden="true"><HouseIcon /></div>
          <div>
            <div className="brand-name">Roman</div>
            <div className="brand-sub">Inmobiliaria</div>
          </div>
        </a>
        <nav className="nav-links" aria-label="Principal">
          <a href="#propiedades">Propiedades</a>
          <a href="#contacto">Contacto &amp; Cita</a>
        </nav>
        <div className="nav-actions">
          <button className="icon-btn" onClick={onToggleTheme} aria-label="Cambiar tema">{theme === 'dark' ? <SunIcon /> : <MoonIcon />}</button>
          <button className="btn btn-outline btn-sm" onClick={onAdminClick} aria-label="Acceso administrador"><LockIcon /> Admin</button>
          <button className="icon-btn menu-btn" aria-label="Menú" aria-expanded={menuOpen} onClick={() => setMenuOpen(o => !o)}><MenuIcon /></button>
        </div>
      </div>
      {menuOpen && (
        <nav className="nav-drawer open" aria-label="Menú móvil">
          <a href="#propiedades" onClick={() => setMenuOpen(false)}>Propiedades</a>
          <a href="#contacto" onClick={() => setMenuOpen(false)}>Contacto &amp; Cita</a>
        </nav>
      )}
    </header>
  )
}
