document.getElementById('reviewForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value.trim();
    const movie = document.getElementById('movie').value.trim();
    const review = document.getElementById('review').value.trim();
  
    if (!name || !movie || !review) {
      alert('Please fill in all fields.');
      return;
    }
  
    alert(`Thank you for your review, ${name}!`);
  });
  