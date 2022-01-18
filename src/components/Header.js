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
        <h3>MyBlog</h3>
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
          <img
            src={
              burger
                ? 'https://static.thenounproject.com/png/204478-200.png'
                : 'https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/navigate_cross.png'
            }
            alt="burger menu"
            width="25px"
            height="20px"
          />
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
