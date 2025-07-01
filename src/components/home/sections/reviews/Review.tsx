import iconComma from '../../../../assets/icon-comma.svg'
import StarList from './StarList'

interface IReviewItem {
  review: IReview
}

const Review = ({review}: IReviewItem) => {
  return (
    <section className="reviewCard">
      <img className='reviewIcon' src={iconComma} alt='Perfil de Review' height={92} width={92}/>
      <div className='reviewDescription'>
        {review.description}
      </div>
      <div className='reviewContentProfile'>
        <div className='containerReviewText'>
          <div className='contentReviewImage'>
            <img className='profileReviewImage' src={review.authorImage} alt={review.authorName} height={64} width={64}/>
          </div>
          <div className='contentReviewText'>
            <p className='reviewText reviewTextName'>{review.authorName}</p>
            <p className='reviewText reviewTextJob'>{review.authorJob}</p>
          </div>
        </div>
        <StarList rating={review.rating}/>
      </div>
    </section>
  )
}

export default Review