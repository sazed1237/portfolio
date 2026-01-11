import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Page/Home/Home.jsx';
import Services from './Page/Services/Services.jsx';
import Resume from './Page/Resume/Resume.jsx';
import Work from './Page/Work/Work.jsx';
import Contact from './Page/Contact/Contact.jsx';
import MainHome from './Page/Home/Home/MainHome.jsx';
import NotFound from './Page/NotFound/NotFound.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <MainHome></MainHome>
      },
      {
        path: 'services',
        element: <Services></Services>
      },
      {
        path: 'resume',
        element: <Resume></Resume>
      },
      {
        path: 'projects',
        element: <Work></Work>
      },
      {
        path: 'contact',
        element: <Contact></Contact>
      },
      {
        path: '*',
        element: <NotFound></NotFound>
      }
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
