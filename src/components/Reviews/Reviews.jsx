import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchReviews } from 'components/Api-service/ApiService';
import { ReviewsList } from '../ReviewsList/ReviewsList';
import css from './Reviews.module.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    async function fetchReview() {
      try {
        await fetchReviews(movieId).then(data => setReviews(data.results));
      } catch (error) {
        console.log(error);
      }
    }
    fetchReview();
  }, [movieId]);

  return (
    <section className={css.section}>
      <h3 className={css.section__title}>Reviews</h3>
      {reviews.length > 0 ? (
        <ReviewsList reviews={reviews} />
      ) : (
        <div className={css.noInfo}>No reviews for this movie.</div>
      )}
    </section>
  );
};
export default Reviews;