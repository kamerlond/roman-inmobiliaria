export function Footer() {
  return (
    <footer>
      <div className="wrap footer-inner">
        <div>
          <span className="footer-brand">Roman Inmobiliaria</span>
          <p style={{marginTop:'.35rem'}}>Tu hogar, nuestra misión.</p>
        </div>
        <p>© {new Date().getFullYear()} Roman Inmobiliaria. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}
