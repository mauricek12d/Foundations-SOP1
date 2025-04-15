const API_URL = '/api/reviews';

export const submitReview = async (reviewData) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reviewData)
    });

    const data = await response.json();
    return data;
  } catch (err) {
    console.error('Error submitting review:', err);
    throw err;
  }
};

export const getReviews = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (err) {
    console.error('Error fetching reviews:', err);
    throw err;
  }
};
