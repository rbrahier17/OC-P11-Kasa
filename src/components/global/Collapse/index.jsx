/**
 * COMPONENT FOR COLLAPSIBLE CONTENT
 * The style differs depending on page (props 'page')
 */

import "./style.css";
import { useState } from "react";
import iconArrow from "../../../assets/images/icons/arrow-y.svg";

function Collapse({ page, title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  function formatList(list) {
    return (
      <ul>
        {list.map((el, idx) => (
          <li key={el + "-" + idx}>{el}</li>
        ))}
      </ul>
    );
  }

  const formattedContent = Array.isArray(content) ? formatList(content) : <p>{content}</p>;

  return (
    <article className={`Collapse ${page} ${isOpen ? " open" : ""}`} onClick={() => setIsOpen(!isOpen)}>
      <h3>
        {title}
        <img src={iconArrow} alt='Icône flèche' />
      </h3>
      <div className='content'>{formattedContent}</div>
    </article>
  );
}


export default Collapse;
