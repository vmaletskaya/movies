import { Suspense, useEffect, useState, useRef } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import { TiArrowBackOutline } from 'react-icons/ti';
import { fetchById } from 'Api-service/ApiService';
import Loader from 'components/Loader/Loader';
import image from '../../images/image.jpg';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');
  const [movie, setMovie] = useState(null);
  const imageBaseUrl = 'https://image.tmdb.org/t/p/w400';
  const { movieId } = useParams();

  useEffect(() => {
    const getMovieInfo = async () => {
      try {
        await fetchById(movieId).then(data => setMovie(data));
      } catch (error) {
        console.log(error);
      }
    };
    getMovieInfo();
  }, [movieId]);

  if (!movie) return;

  const { genres, production_countries } = movie;

  const movieGenres = genres.map(genre => genre.name).join(', ');
  const countries = production_countries
    .map(country => country.name)
    .join(', ');

  return (
    <>
      <section className={css.section}>
        <div className={css.content}>
          <Link to={backLinkLocationRef.current} className={css.button}>
            <TiArrowBackOutline />
          </Link>
          {movie.poster_path ? (
            <img
              src={`${imageBaseUrl}${movie.poster_path}`}
              alt={movie.title}
              className={css.image}
            />
          ) : (
            <img src={`${image}`} alt="Not found" className={css.image} />
          )}
          {movie && (
            <div className={css.info}>
              <h1 className={css.info__title}>{movie.title}</h1>
              {movie.tagline && (
                <h2 className={css.info__tagline}>
                  <i>"{movie.tagline}"</i>
                </h2>
              )}
              <p className={css.info__text}>
                <span className={css.info__accent}>Genres:</span> {movieGenres}
              </p>
              <p className={css.info__text}>
                <span className={css.info__accent}>Countries:</span> {countries}
              </p>
              <div className={css.overview}>
                <summary>Overview:</summary>
                <p>"{movie.overview}"</p>
              </div>
              <ul className={css.additional__links}>
                <li>
                  <NavLink to={'cast'} className={css.link}>
                    Cast
                  </NavLink>
                </li>
                <li>
                  <NavLink to={'reviews'} className={css.link}>
                    Reviews
                  </NavLink>
                </li>
              </ul>
            </div>
          )}
        </div>
      </section>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;