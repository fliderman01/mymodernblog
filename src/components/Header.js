import React, { useState } from 'react';
import '../style.css';
import './Header.css';

export default function Header() {
  const [burger, setBurger] = useState('hide');

  // toggle burger menu
  const burgerMenu = () => {
    burger ? setBurger('') : setBurger('hide');
  };

  return (
    <header>
      <nav>
        <h3>My Blog</h3>
        <div className="headline">
          <ul className={burger}>
            <li>
              <a href="#">Product</a>
            </li>
            <li>
              <a href="#">company</a>
            </li>
            <li>
              <a href="#">contact</a>
            </li>
          </ul>
          <ul className={burger}>
            <li>
              <a href="#">Login</a>
            </li>
            <li>
              <a href="#">Sign Up</a>
            </li>
          </ul>
        </div>
        <button className="burgerBtn" onClick={burgerMenu}>
          Burger
        </button>
      </nav>

      <h1>A modern publishing platform</h1>
      <p>Grow your audience and build your online brand</p>

      <div className="register">
        <button>Start for Free</button>
        <button>Learn More</button>
      </div>
    </header>
  );
}
