import starIcon from '../../../../assets/estrella.png'
import halfStarIcon from '../../../../assets/media-estrella.png'

const StarList = ({ rating }: { rating: number }) => {
  
  const estrellasCompletas = Math.floor(rating);
  const tieneMediaEstrella = rating % 1 >= 0.5;

  const estrellas = [];

  for (let i = 0; i < estrellasCompletas; i++) {
    estrellas.push(<img key={`full-${i}`} src={starIcon} alt={'Ícono de estrella'} width={24} height={24} className='starIcon'/>);
  }

  if (tieneMediaEstrella) {
    estrellas.push(<img key="half" src={halfStarIcon} alt={`Ícono de media estrella`} width={24} height={24} className='starIcon halfStarIcon'/>);
  }

  return <div className='contentStarReview'>{estrellas}</div>;
}

export default StarList