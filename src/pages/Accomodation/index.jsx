/**
 * ACCOMODATION DETAILS PAGE
 */

import "./style.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Carousel from "../../components/page-accomodation/Carousel";
import AccomodationHeader from "../../components/page-accomodation/AccomodationHeader";
import Collapse from "../../components/global/Collapse";

export default function Accomodation() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [accomodation, setAccomodation] = useState(null);

  const accomodationId = useParams().id;

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((result) => {
        setIsLoaded(true);
        const data = result.accomodations.find((item) => item.id === accomodationId);
        setAccomodation(data);
      })
      .catch((error) => {
        console.log(error);
        setIsLoaded(true);
      });
  }, [accomodationId]);

  if (!isLoaded) {
    return <div>Loading...</div>;
  } else if (!accomodation) { // If no accomodation throw 404
    throw new Response("Accomodation not found", { status: 404 });
  } else {
    return (
      <main className='Accomodation-page'>
        <article>
          <Carousel pictures={accomodation.pictures} />
          <AccomodationHeader
            title={accomodation.title}
            host={accomodation.host}
            location={accomodation.location}
            tags={accomodation.tags}
            rating={accomodation.rating}
          />
          <section className='collapse-container'>
            <Collapse page='accomodation' title='Description' content={accomodation.description} />
            <Collapse page='accomodation' title='Équipements' content={accomodation.equipments} />
          </section>
        </article>
      </main>
    );
  }
}
