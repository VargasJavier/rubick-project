import Review from "./Review"

interface IReviewList {
  reviewsList: IReview[]
}

const ReviewsList = ({reviewsList}: IReviewList) => {
  return (
    <div className='containerReviewsList'>
      {
        reviewsList.map((review: IReview, index: number) => (
          <Review review={review} key={index}/>
        ))
      }
    </div>
  )
}

export default ReviewsList