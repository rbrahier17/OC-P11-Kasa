/**
 * TOP PAGE BANNER WITH BACKGROUND PICTURE AND TITLE
 * The style differs depending on page (props 'page')
 */

import './style.css';

function getBannerTitle(page) {
  switch (page) {
    case 'home':
      return (
        <>
          <span>Chez vous, &nbsp;</span> partout et ailleurs
        </>
      );
    default:
      return null;
  }
}

function Banner({ page }) {
  const title = getBannerTitle(page);
  return <div className={`Banner ${page}`}>{title ? <h1>{title}</h1> : null}</div>;
}

export default Banner;
