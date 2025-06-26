import Logo from "./Logo"
import NavBar from "./NavBar"
import './header.css'

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <NavBar />
      <button>Iniciar</button>
    </header>
  )
}

export default Header