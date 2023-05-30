import PropTypes from 'prop-types';
import css from './CastList.module.css';
import image from '../../images/image.jpg';

export const CastList = ({ credits }) => {
  const imageBaseUrl = 'https://image.tmdb.org/t/p/w200';
  return (
    <ul className={css.cast__gallery}>
      {credits.map(credit => {
        return (
          <li key={credit.id} className={css.cast__item}>
            {credit.profile_path ? (
              <img
                src={`${imageBaseUrl}${credit.profile_path}`}
                alt={credit.name}
                className={css.cast__image}
              />
            ) : (
              <img
                src={`${image}`}
                alt="Not found"
                className={css.cast__image}
              />
            )}
            <p className={css.cast__info}>Name: {credit.name}</p>
            <p className={css.cast__info}>Character: {credit.character}</p>
          </li>
        );
      })}
    </ul>
  );
};

CastList.propTypes = {
  credits: PropTypes.array.isRequired,
};