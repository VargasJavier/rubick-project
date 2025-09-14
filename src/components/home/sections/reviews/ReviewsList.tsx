import Review from "./Review"

interface IReviewList {
  reviewsList: IReview[]
}

const ReviewsList = ({reviewsList}: IReviewList) => {
  return (
    <div className='containerReviewsList'>
      <div className="contentReviewsList">
      {
        reviewsList.map((review: IReview, index: number) => (
          <Review review={review} key={index}/>
        ))
      }
      </div>
    </div>
  )
}

export default ReviewsList