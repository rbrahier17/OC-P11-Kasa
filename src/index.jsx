import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './style/reset.css';
import './style/app.css';

import Root from './Root';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import AccomodationPage from './pages/Accomodation';
import ErrorPage from './pages/Error';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "accomodation/:id",
        element: <AccomodationPage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);
