import logo from '../../assets/logo.png'

const Logo = () => {
  return (
    <div className='logoContainer'>
      <img className="logo" src={logo} height={55}/>
      <h2 className='nameLogo'>Rubik</h2>
    </div>
  )
}

export default Logo