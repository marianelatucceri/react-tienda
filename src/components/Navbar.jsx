import logo from "../assets/logo-sweety.png";

export default function Navbar () {
    return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="Logo Tienda" />
      </div>

      <div className="navbar__categories">
        <a href="#">Pastelería</a>
        <a href="#">Chocolates</a>
        <a href="#">Cursos online</a>
      </div>
    </nav>
    )
}


