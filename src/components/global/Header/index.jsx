/**
 * APP HEADER
 */

import "./style.css";
import logo from "../../../assets/images/logo.png";
import { NavLink } from "react-router-dom";

function Header() {
  const navItems = [
    {
      title: "Accueil",
      path: "/",
    },
    {
      title: "A propos",
      path: "about",
    },
  ];

  return (
    <header className='Header'>
      <NavLink to='/'>
        <img src={logo} alt='Kasa logo' />
      </NavLink>
      <nav>
        <ul>
          {navItems.map((item) => (
            <li key={item.title}>
              <NavLink to={item.path} className={({ isActive }) => (isActive ? "active" : undefined)}>
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
