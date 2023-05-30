import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCredits } from 'components/Api-service/ApiService';
import { CastList } from '../CastList/CastList';
import css from './Cast.module.css';

const Cast = () => {
  const [credits, setCredits] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    async function fetchCast() {
      try {
        await fetchCredits(movieId).then(data => setCredits(data.cast));
      } catch (error) {
        console.log(error);
      }
    }
    fetchCast();
  }, [movieId]);
  return (
    <section className={css.section}>
      <h3 className={css.section__title}>Cast:</h3>
      {credits.length > 0 ? (
        <CastList credits={credits} />
      ) : (
        <div className={css.noInfo}>No info about the cast.</div>
      )}
    </section>
  );
};

export default Cast;
