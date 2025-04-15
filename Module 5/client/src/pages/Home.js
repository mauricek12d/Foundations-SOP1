import React from 'react';
import ReviewForm from '../components/ReviewForm';
import inceptionPoster from '../images/Inception-movie.jpg'; 

function Home() {
  return (
    <>
      <section className="movie-highlight">
        <img src={inceptionPoster} alt="Inception" />
        <div className="description">
          <h2>Inception</h2>
          <p>Directed by Christopher Nolan, 
            Inception is about the character Dom Cobb (Leonardo DiCaprio) who is a thief with the rare ability to enter people's dreams and steal their secrets from their subconscious. 
            His skill has made him a hot commodity in the world of corporate espionage but has also cost him everything he loves. 
            Cobb gets a chance at redemption when he is offered a seemingly impossible task: Plant an idea in someone's mind. If he succeeds, it will be the perfect crime, but a dangerous enemy anticipates Cobb's every move.
            </p>
        </div>
      </section>

      <ReviewForm />
    </>
  );
}

export default Home;
