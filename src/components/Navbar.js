import React from 'react';
import '../styles/Navbar.css'

function Navbar({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary custom-nav">
      <div className="container-fluid">
        <h1 className="custom-page-title px-2 pt-1">Anna Langford</h1>
        <button className="navbar-toggler custom-btn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                href="#about"
                onClick={() => handlePageChange('About')}
                className={currentPage === 'About' ? 'custom-nav-link custom-nav-link-active p-2 m-1' : 'custom-nav-link p-2 m-1'}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#portfolio"
                onClick={() => handlePageChange('Portfolio')}
                className={currentPage === 'Portfolio' ? 'custom-nav-link custom-nav-link-active p-2 m-1' : 'custom-nav-link p-2 m-1'}
              >
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#resume"
                onClick={() => handlePageChange('Resume')}
                className={currentPage === 'Resume' ? 'custom-nav-link custom-nav-link-active p-2 m-1' : 'custom-nav-link p-2 m-1'}
              >
                Resume
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#contact"
                onClick={() => handlePageChange('Contact')}
                className={currentPage === 'Contact' ? 'custom-nav-link custom-nav-link-active p-2 m-1' : 'custom-nav-link p-2 m-1'}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;