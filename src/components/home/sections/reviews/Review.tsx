interface IReviewItem {
  review: IReview
}

const Review = ({review}: IReviewItem) => {
  return (
    <section>
      {review.description}
    </section>
  )
}

export default Review