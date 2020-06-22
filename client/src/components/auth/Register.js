import React, { Fragment } from "react";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <Fragment>
      <div className='container register'>
        <h1 className='large'>Sign Up</h1>
        <p className='lead' style={{ color: "white" }}>
          <i className='fas fa-user'></i> Create Your Account
        </p>
        <form className='form'>
          <div className='form-group'>
            <input
              type='text'
              placeholder='Name'
              name='name'
              autoComplete='off'
            />
          </div>
          <div className='form-group'>
            <input
              type='email'
              placeholder='Email Address'
              name='email'
              autoComplete='off'
            />
          </div>
          <div className='form-group'>
            <input type='password' placeholder='Password' name='password' />
          </div>
          <div className='form-group'>
            <input
              type='password'
              placeholder='Confirm Password'
              name='password2'
            />
          </div>
          <input
            type='submit'
            className='btn'
            value='register'
            style={{
              background: "#2ecc71",
              color: "white",
              marginTop: "20px",
            }}
          />
        </form>
        <p style={{ color: "white", marginBottom: "30px" }}>
          Already have an account? <Link to='/login'>Sign In</Link>
        </p>
      </div>
    </Fragment>
  );
};

export default Register;
