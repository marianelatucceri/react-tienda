import logo from "../assets/logo-sweety.png";
import CartWidget from "./CartWidget";

export default function Navbar () {
    return (
    <div className="navbar-container">
      <div className="navbar__logo">
        <img src={logo} alt="Logo Tienda" />
      </div>

     <nav className="navbar">
      <div className="navbar__categories">
        <a href="#">Pastelería</a>
        <a href="#">Chocolates</a>
        <a href="#">Cursos online</a>
      </div>
     </nav>

     <CartWidget />
     
    </div>
    )
}


