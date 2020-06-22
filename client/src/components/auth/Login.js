import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Fragment>
      <div className='container register'>
        <h1 className='large'>Sign in</h1>
        <p className='lead' style={{ color: "white" }}>
          <i className='fas fa-user'></i> Sign into your account
        </p>
        <form className='form'>
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

          <input
            type='submit'
            className='btn'
            value='Login'
            style={{
              background: "#2ecc71",
              color: "white",
              marginTop: "20px",
            }}
          />
        </form>
        <p style={{ color: "white", marginBottom: "30px" }}>
          Don't have an account? <Link to='/register'>Sign Up</Link>
        </p>
      </div>
    </Fragment>
  );
};

export default Login;
