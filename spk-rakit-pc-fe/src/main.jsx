import React from 'react';
import ReactDOM from 'react-dom/client';

// pages and assets
import App from './App.jsx';
import Homepage from './pages/Homepage.jsx';
import Buildpage from './pages/Buildpage.jsx';
import Cataloguepage from './pages/Cataloguepage.jsx';
import './index.css';

// router
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route exact path='/' element={<App />}>
      <Route path='/' element={<Homepage />} />
      <Route path='/build' element={<Buildpage />} />
      <Route path='/catalogue' element={<Cataloguepage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} fallbackElement={<h1>Loading...</h1>} />
  </React.StrictMode>
);


