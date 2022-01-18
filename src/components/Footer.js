import React from 'react';
import '../style.css';
import './Footer.css';

export default function Footer() {
  return (
    <footer>
      <h3>MyBlog</h3>
      <ul>
        <li>Product</li>
        <li>
          <a href="#">Overview</a>
        </li>
        <li>
          <a href="#">Pricing</a>
        </li>
        <li>
          <a href="#">Marketplace</a>
        </li>
        <li>
          <a href="#">Features</a>
        </li>
        <li>
          <a href="#">Intergrations</a>
        </li>
      </ul>
      <ul>
        <li>Company</li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Team</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">Careers</a>
        </li>
      </ul>
      <ul>
        <li>Connect</li>
        <li>
          <a href="#">contact</a>
        </li>
        <li>
          <a href="#">Newsletter</a>
        </li>
        <li>
          <a href="#">LinkedIn</a>
        </li>
      </ul>
    </footer>
  );
}
