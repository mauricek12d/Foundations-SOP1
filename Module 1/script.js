// This script handles the form submission for the movie review application
document.getElementById('reviewForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value.trim();
    const movie = document.getElementById('movie').value.trim();
    const review = document.getElementById('review').value.trim();
  
    if (!name || !movie || !review) {
      alert('Please fill in all fields.');
      return;
    }

    fetch('http://localhost:3000/api/reviews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, movie, review })
    })
    .then(res => res.json())
    .then(data => {
      alert(`Thank you for your review, ${data.data.name}!`);
      console.log('Review submitted:', data);
    }
    )
    .catch(err => {
      console.error('Error submitting review:', err);
      alert('There was an error submitting your review. Please try again later.');
    });
  }
);