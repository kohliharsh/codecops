import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;
  function handleChange(event) {
    const { name, value } = event.target;
    return setFormData((prevVal) => {
      return {
        ...prevVal,
        [name]: value,
      };
    });
  }

  const submit = async (event) => {
    event.preventDefault();
    login({ email, password });
  };
  return (
    <Fragment>
      <div className='container register'>
        <h1 className='large'>Sign in</h1>
        <p className='lead' style={{ color: "white" }}>
          <i className='fas fa-user'></i> Sign into your account
        </p>
        <form className='form' onSubmit={submit}>
          <div className='form-group'>
            <input
              onChange={handleChange}
              type='email'
              placeholder='Email Address'
              name='email'
              autoComplete='off'
              value={email}
            />
          </div>
          <div className='form-group'>
            <input
              onChange={handleChange}
              type='password'
              placeholder='Password'
              name='password'
              value={password}
            />
          </div>

          <input
            onChange={handleChange}
            type='submit'
            className='btn submit'
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

Login.protoTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
