import React from 'react';
import './Nav.css';


function Nav({ Toggle }) {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark custom-navbar">
      <i className="navbar-brand bi bi-justify-left fs-4 toggle-icon" onClick={Toggle}></i>
      
      <button
        className="navbar-toggler d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="bi bi-justify navbar-toggler-icon"></i>
      </button>
      
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle user-link"
              href="#"
              id="dropdownId"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Yousof
            </a>
            <div className="dropdown-menu dropdown-menu-end custom-dropdown" aria-labelledby="dropdownId">
              <a className="dropdown-item" href="#">Profile</a>
              <a className="dropdown-item" href="#">Setting</a>
              <a className="dropdown-item" href="#">Logout</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
