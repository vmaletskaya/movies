import PropTypes from 'prop-types';
import css from './ReviewsList.module.css';

export const ReviewsList = ({ reviews }) => {
  return (
    <ul>
      {reviews.map(({ author, content }) => {
        return (
          <li key={author} className={css.review}>
            <p className={css.review__text}>Author: {author}</p>
            <p className={css.review__text}>
              Review: <br />"{content}"
            </p>
          </li>
        );
      })}
    </ul>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.array.isRequired,
};