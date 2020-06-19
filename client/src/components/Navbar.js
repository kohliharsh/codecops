import React from "react";

function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg'>
      <h2>
        <a href='#'>CodeCops</a>
      </h2>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNavDropdown'
        aria-controls='navbarNavDropdown'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'>
          <img
            src='https://img.icons8.com/cotton/2x/menu.png'
            alt=''
            width='35px'
            height='35px'
          ></img>
        </span>
      </button>
      <div
        className='collapse navbar-collapse justify-content-end'
        id='navbarNavDropdown'
      >
        <ul className='navbar-nav'>
          <li className='nav-item active'>
            <a className='nav-link' href='#'>
              Home <span className='sr-only'>(current)</span>
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              About
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              Features
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              Events
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              Blog
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              Team
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
