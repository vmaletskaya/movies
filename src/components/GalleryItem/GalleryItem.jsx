import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import image from '../../images/image.jpg';
import css from './GalleryItem.module.css';

const GalleryItem = ({ rating, release, state, path, poster, title }) => {
  const imageBaseUrl = 'https://image.tmdb.org/t/p/w300';
  const releaseDate = new Date(`${release}`).toLocaleDateString({
    day: 'numeric',
    year: 'numeric',
    month: 'long',
  });
  return (
    <li className={css.gallery__item}>
      <Link to={path} state={state}>
        <article>
          <div>
            {poster ? (
              <img
                src={`${imageBaseUrl}${poster}`}
                alt={title}
                className={css.gallery__image}
              />
            ) : (
              <img
                src={`${image}`}
                alt="Not found"
                className={css.gallery__image}
              />
            )}
            <p className={css.item__title}>{title}</p>
            <div className={css.info}>
              <p>Rating: {rating}</p>
              <p>Release: {releaseDate}</p>
            </div>
          </div>
        </article>
      </Link>
    </li>
  );
};

export default GalleryItem;

GalleryItem.propTypes = {
  rating: PropTypes.string.isRequired,
  release: PropTypes.string.isRequired,
  state: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  poster: PropTypes.string,
};