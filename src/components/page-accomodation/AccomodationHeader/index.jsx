/**
 * HEADER FOR ACCOMODATION DETAILS PAGE
 * It displays: 
 * -accomodation title
 * -accomodation location
 * -host name and picture
 * -tags
 * -rating with star icons
 */

import "./style.css";
import PropTypes from "prop-types";
import iconStarRed from "../../../assets/images/icons/star-red.svg";
import iconStarGrey from "../../../assets/images/icons/star-grey.svg";

export function AccomodationHeader({ title, host, location, tags, rating }) {
  const stars = ["☆", "☆", "☆", "☆", "☆"];

  return (
    <header className='AccomodationHeader'>
      <h2>{title}</h2>
      <div className='host'>
        <p>{host.name}</p>
        <img src={host.picture} alt={host.name} />
      </div>
      <p className='location'>{location}</p>
      <ul className='tags'>
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <div className='rating'>
        {stars.map((star, idx) =>
          rating > idx ? (
            <img src={iconStarRed} key={`star-${idx}`} alt='Étoile pleine' />
          ) : (
            <img src={iconStarGrey} key={`star-${idx}`} alt='Étoile vide' />
          )
        )}
      </div>
    </header>
  );
}
AccomodationHeader.propTypes = {
  title: PropTypes.string.isRequired,
  host: PropTypes.object.isRequired,
  location: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  rating: PropTypes.string.isRequired,
};

export default AccomodationHeader;
