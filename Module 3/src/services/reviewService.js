export const fetchReviews = async () => {   
    const response = await fetch('https://api.example.com/reviews');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
    };

export const addReview = async (review) => {
    const response = await fetch('https://api.example.com/reviews', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(review),
    });
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};