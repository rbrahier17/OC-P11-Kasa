/**
 * ACCOMODATION THUMBNAIL (CARD)
 * It displays the accomodation title and cover picture
 * On click it redirects to the accomodation detail page with the accomodation id in the URL
 */

import './style.css';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

function Thumbnail({ title, cover, id }) {
  return (
    <Link to={`/accomodation/${id}`} className='Thumbnail'>
      <article>
        <img src={cover} alt={title} />
        <h2>{title}</h2>
      </article>
    </Link>
  );
}

Thumbnail.propTypes = {
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Thumbnail;
