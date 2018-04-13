export const selectReviews = (state, routerOptions) => {
  console.log("selecting reviews");
  const businessId = routerOptions.match.params.businessId;
  const business = state.entities.businesses[businessId];
  
  if (business === undefined) return [];

  const reviews = business.reviews.map(reviewId => (
    state.entities.reviews[reviewId]
  ));
  console.log('returning selected reviews');
  console.log(reviews);
  return reviews;
};

export const userReview = (state, routerOptions) => {
  console.log("selecting user review");
  if (Object.keys(state.session).length === 0) return undefined;

  const user = Object.values(state.session)[0];

  const businessId = routerOptions.match.params.businessId;
  if (businessId === undefined) return undefined;
  
  const reviewId = user.businessToReview[businessId];

  if (reviewId === undefined) return undefined;

  const review = state.entities.reviews[reviewId];
  console.log('returning user review');
  console.log(review);
  return review;
};
