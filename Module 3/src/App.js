import React from 'react';
import './styles/App.css'; // Make sure you import your CSS if it exists

function App() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/reviews">Reviews</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="movie-highlight">
          <img src="/Images/Inception-movie.jpg" alt="Inception" />
          <div className="description">
            <h2>Inception</h2>
            <p>
              Directed by Christopher Nolan, Inception is about the character Dom Cobb (Leonardo DiCaprio)
              who is a thief with the rare ability to enter people's dreams and steal their secrets from
              their subconscious. His skill has made him a hot commodity in the world of corporate espionage
              but has also cost him everything he loves. Cobb gets a chance at redemption when he is offered
              a seemingly impossible task: Plant an idea in someone's mind. If he succeeds, it will be the
              perfect crime, but a dangerous enemy anticipates Cobb's every move.
            </p>
          </div>
        </section>

        <section className="review-form">
          <h3>Leave a Review</h3>
          <form id="reviewForm">
            <input type="text" id="name" placeholder="Your Name" />
            <input type="text" id="movie" placeholder="Movie Title" />
            <textarea id="review" placeholder="Your Review"></textarea>
            <button type="submit">Submit Review</button>
          </form>
        </section>
      </main>
    </>
  );
}

export default App;
