/**
 * ACCOMODATION LIST OF THUBMNAILS DISPLAYED ON HOME PAGE
 * Fetch accomodation data and create a list of accomodation thumbnails
 */

import './style.css';
import { useState, useEffect } from 'react';
import Thumbnail from '../Thumbnail';

function ThumbnailList() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [accomodations, setAccomodations] = useState([]);

  function fetchData() {
    fetch('/data.json')
      .then((res) => res.json())
      .then((result) => {
        setIsLoaded(true);
        setAccomodations(result.accomodations)
      })
      .catch((error) => {
        setIsLoaded(true);
        setError(error);
      });
  }

  // Note: the empty deps array [] means this useEffect will run once
  useEffect(() => {
    fetchData();
  }, []);

  if (error) {
    return <section className='ThumbnailList'>Error: {error.message}</section>;
  } else if (!isLoaded) {
    return <section className='ThumbnailList'>Loading...</section>;
  } else {
    return (
      <section className='ThumbnailList'>
        {accomodations.map((item) => (
          <Thumbnail title={item.title} cover={item.cover} id={item.id} key={item.id} />
        ))}
      </section>
    );
  }
}

export default ThumbnailList;
