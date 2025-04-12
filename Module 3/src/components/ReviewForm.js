import React, { useState } from 'react';

function ReviewForm() {
    const [formData, setFormData] = useState({
        name: '',
        movie: '',
        review: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.movie || !formData.review) {
            alert('Please fill in all fields');
            return;
        }

        try {
            const res = await fetch('https://api/reviews', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await res.json();

            if (res.ok) {
                alert('Review submitted successfully');
                setFormData({ name: '', movie: '', review: '' });
            } else
                alert('Something went wrong.');
        }
        catch (error) {
            console.error('Error submitting review', error);
            alert('An error occurred while submitting your review');
        }
    };

    return (
        <section className="review-form">
            <h3>Leave a Review</h3>
            <form id="reviewForm" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                />
                <input
                    type="text"
                    name="movie"
                    value={formData.movie}
                    onChange={handleChange}
                    placeholder="Movie Title"
                />
                <textarea
                    name="review"
                    value={formData.review}
                    onChange={handleChange}
                    placeholder="Your Review"
                ></textarea>
                <button type="submit">Submit Review</button>
            </form>
        </section>
    );
}

export default ReviewForm;

