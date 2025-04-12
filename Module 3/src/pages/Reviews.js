import React, { useEffect, useState } from 'react';
import ReviewCard from '../components/ReviewCard';

function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('/api/reviews')
      .then(res => res.json())
      .then(data => setReviews(data))
      .catch(err => console.error('Error fetching reviews:', err));
  }, []);

  return (
    <section>
      <h2>All Reviews</h2>
      {reviews.length === 0 ? (
        <p>No reviews yet. Be the first!</p>
      ) : (
        reviews.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))
      )}
    </section>
  );
}

export default Reviews;
