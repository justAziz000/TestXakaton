import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <nav>
        <Link to="cat">Mushuk</Link>
        <Link to="dog">Dog</Link>
        <Link to="fish">Fish</Link>
        <Link to="bird">Bird</Link>
        <Link to="pet">Pet</Link>
      </nav>

      <Outlet />
    </div>
  );
};

export default App;
