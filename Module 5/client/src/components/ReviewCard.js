import React from 'react';

function ReviewCard({ review }) {
  return (
    <div className="review-card">
      <h3>{review.movie}</h3>
      <p>{review.review}</p> 
        <p><strong>Reviewed by:</strong> {review.name}</p>
        </div>
  );
}

export default ReviewCard;
