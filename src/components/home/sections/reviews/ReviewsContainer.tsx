import { reviewsList } from "../../../../data/reviews"
import ReviewsList from "./ReviewsList"

const ReviewsContainer = () => {
  return (
    <section className="sectionReviews">
      <div className='containerHeaderReviews'>
        <h3 className='titleHeaderReview'>Reseñas</h3>
        <div className='subtitleHeaderReview'>
          <button className="arrowReview arrowReviewLeft">
            {'<'}
          </button>
          <button className="arrowReview arrowReviewRight">
            {'>'}
          </button>
        </div>
      </div>
      <section>
        <ReviewsList reviewsList={reviewsList}/>
      </section>
    </section>
  )
}

export default ReviewsContainer