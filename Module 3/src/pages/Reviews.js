import React, { useEffect, useState } from 'react';
import { getReviews } from '../services/reviewService';
import ReviewCard from '../components/ReviewCard';

function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews()
      .then((data) => setReviews(data))
      .catch((err) => console.error('Failed to load reviews:', err));
  }, []);

  return (
    <section className="review-list">
      <h2>Recent Reviews</h2>
      {reviews.length ? (
        reviews.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))
      ) : (
        <p>No reviews yet.</p>
      )}
    </section>
  );
}

export default Reviews;
