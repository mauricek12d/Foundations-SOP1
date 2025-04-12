import React, { useState, useEffect } from 'react';
import ReviewCard from '../components/ReviewCard';  
import { fetchReviews } from '../services/reviewService '; 

function Home() {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getReviews = async () => {
            try {
                const data = await fetchReviews();
                setReviews(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        getReviews();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>Product Reviews</h1>
            {reviews.map(review => (
                <ReviewCard key={review.id} review={review} />
            ))}
        </div>
    );
}
export default Home;

