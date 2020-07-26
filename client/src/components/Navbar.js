import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";
function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg'>
      <h3>
        <Link to='/'>CodeCops</Link>
      </h3>
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
          <li
            className='nav-item active'
            data-toggle='collapse'
            data-target='.navbar-collapse'
          >
            <Link className='nav-link' to='/'>
              Home <span className='sr-only'>(current)</span>
            </Link>
          </li>
          <li
            className='nav-item'
            data-toggle='collapse'
            data-target='.navbar-collapse'
          >
            <Link className='nav-link' to='/about'>
              About
            </Link>
          </li>

          <li
            className='nav-item'
            data-toggle='collapse'
            data-target='.navbar-collapse'
          >
            <Link className='nav-link' to='/goc'>
              Game Of Codes
            </Link>
          </li>
          {/* Future Blog link */}
          {/* <li className='nav-item'>
            <Link className='nav-link' to='/blog'>
              Blog
            </Link>
          </li> */}
          <li
            className='nav-item'
            data-toggle='collapse'
            data-target='.navbar-collapse'
          >
            <Link className='nav-link' to='/team'>
              Team
            </Link>
          </li>
          {/* Future Signup/signin */}
          {/* <li className='nav-item' data-toggle="collapse"
            data-target=".navbar-collapse">
            <Link className='nav-link' to='/register'>
              SignUp/SignIn
            </Link>
          </li> */}
          <li
            className='nav-item'
            data-toggle='collapse'
            data-target='.navbar-collapse'
          >
            <Link className='nav-link' to='/contact'>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
