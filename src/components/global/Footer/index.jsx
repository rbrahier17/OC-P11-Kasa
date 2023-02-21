/**
 * APP FOOTER
 */

import "./style.css";
import logo from "../../../assets/images/logo.png";


function Footer() {
  return (
    <footer className='Footer'>
      <img src={logo} alt='Kasa logo' />
      <p>© {new Date().getFullYear()} Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;