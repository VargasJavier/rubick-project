import banner from '../../../../assets/foto-wallpaper.jpg'

const Hero = () => {
  return (
    <section className="hero">
        <div className='tag desktop'>
          <p className='tagText'>
            <span className='tagYears'>12+</span>
            Años de experiencia
          </p>
        </div>
        <div className='containerSubtitle'>
          <div className='subtitleDot'/>
          <span className='subtitle'>Somos Rubick</span>
        </div>
        <h1 className='title'>AGENCIA CREATIVA</h1>
        <div className='containerBanner'>
          <div className='contentBanner'>
            <img className='banner' src={banner} alt="Banner sobre análisis de datos" />
          </div>
        </div>
        <div className='footerBanner'>
          <p className='footerText'>Combinamos la imaginación con la estrategia para lograr resultados impactantes</p>
          <span className='footerYear'>@2025</span>
        </div>
      </section>
  )
}

export default Hero