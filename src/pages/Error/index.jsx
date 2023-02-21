/**
 * ERROR PAGE
 */

import "./style.css";
import { useRouteError } from "react-router-dom";
import Header from "../../components/global/Header";
import Footer from "../../components/global/Footer";
import { NavLink } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  function getErrorText(error) {
    switch (error.status) {
      case 404:
        return "Oups! La page que vous demandez n'existe pas.";
      default:
        return error.statusText;
    }
  }

  return (
    <div className='Error-page'>
      <Header />
      <main className="Error-content">
        <h1>{error.status}</h1>
        <p>{getErrorText(error)}</p>
        <NavLink to='/'>Retourner sur la page d'accueil</NavLink>
      </main>
      <Footer />
    </div>
  );
}
