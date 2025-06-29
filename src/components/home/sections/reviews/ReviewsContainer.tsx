import { reviewsList } from "../../../../data/reviews"
import ReviewsList from "./ReviewsList"

const ReviewsContainer = () => {
  return (
    <section className="sectionReviews">
      <div className='containerHeaderReviews'>
        <h3 className='titleHeaderReview'>Reseñas</h3>
        <p className='subtitleHeaderReview'>Un escaparate seleccionado de nuestro trabajo más impactante, que combina estrategia, narración de historias e imágenes destacadas.</p>
      </div>
      <section>
        <ReviewsList reviewsList={reviewsList}/>
      </section>
    </section>
  )
}

export default ReviewsContainer