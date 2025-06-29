import Review from "./Review"

interface IReviewList {
  reviewsList: IReview[]
}

const ReviewsList = ({reviewsList}: IReviewList) => {
  return (
    <div className='containerReviewsList'>
      {
        reviewsList.map((review: IReview) => (
          <Review review={review} />
        ))
      }
    </div>
  )
}

export default ReviewsList