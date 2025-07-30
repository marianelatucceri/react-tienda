import logo from "../assets/logo-tienda.png";

export default function Navbar () {
    return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="Logo Tienda" />
      </div>

      <div className="navbar__categories">
        <a href="#">Indumentaria</a>
        <a href="#">Calzados</a>
        <a href="#">Accesorios</a>
      </div>
    </nav>
    )
}


