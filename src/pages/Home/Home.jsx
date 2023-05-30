import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'Api-service/ApiService';
import { useLocation } from 'react-router-dom';

import Gallery from 'components/Gallery/Gallery';
import css from './Home.module.css';
import Loader from 'components/Loader/Loader';

const Home = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const trendingMovies = async () => {
      try {
        const fetchedMovies = await fetchTrendingMovies().then(data =>
          setMovies(data.results)
        );
        return fetchedMovies;
      } catch (error) {
        console.log(error);
      }
    };
    trendingMovies();
  }, []);
  return (
    <section className={css.section}>
      
      {movies.length > 0 ? (
        <Gallery movies={movies} state={{ from: location }} path={'movies/'}/>
      ) : (
        <Loader />
      )}
    </section>
  );
};

export default Home;