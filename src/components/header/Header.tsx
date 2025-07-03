import Logo from "./Logo"
import NavBar from "./NavBar"
import './header.css'

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <NavBar />
      <button className="desktop">Iniciar</button>
      <button className="mobile iconMenu">
        <img src="https://cdn.prod.website-files.com/67fa31c445aa6489f30f3b50/6800cf73a1e0f62e0614647c_menu.svg" alt="Ícono de hamburguesa"/>
      </button>
    </header>
  )
}

export default Header