import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navBar">
    <h1 className="title">Math Magicians</h1>
    <ul className="menuNav">
      <li key={1}>
        <Link to="/" activeClassName="active-link" exact>
          Home
        </Link>
      </li>
      <li key={2}>
        <Link to="/calculator" activeClassName="active-link" exact>
          Calculator
        </Link>
      </li>
      <li key={3}>
        <Link to="/quote" activeClassName="active-link" exact>
          Quote
        </Link>
      </li>
    </ul>
  </nav>
);
export default Navbar;
