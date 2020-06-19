import React from "react";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='copyrights'>
        <div className='container'>
          <p>
            &copy; Copyrights Code Cops. All rights reserved
            <span> {new Date().getFullYear()}</span>
          </p>
          <div className='credits'></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
