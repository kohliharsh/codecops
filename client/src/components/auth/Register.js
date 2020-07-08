import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { register } from "../../actions/auth";
import PropTypes from "prop-types";
const Register = ({ register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: "",
    emal: "",
    password: "",
    password2: "",
  });
  const { name, email, password, password2 } = formData;
  function handleChange(event) {
    const { name, value } = event.target;
    return setFormData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  }

  const submit = async (event) => {
    event.preventDefault();
    if (password !== password2) {
      prompt("passwords do not match");
    } else {
      register({ name, email, password, password2 });
    }
  };
  return (
    <Fragment>
      <div className='container register'>
        <h1 data-aos="zoom-in-right" data-aos-duration="1000" className='large'>Sign Up</h1>
        <p className='lead'  data-aos="zoom-in-right" data-aos-duration="2000" style={{ color: "white" }}>
          <i className='fas fa-user'></i> Create Your Account
        </p>
        <form className='form' onSubmit={submit}>
          <div className='form-group'>
            <input className='lead'  data-aos="zoom-in-right" data-aos-duration="2200"
              onChange={handleChange}
              type='text'
              placeholder='Name'
              name='name'
              autoComplete='off'
              value={name}
            />
          </div>
          <div className='form-group'>
            <input className='lead'  data-aos="zoom-in-right" data-aos-duration="2200"
              onChange={handleChange}
              type='email'
              placeholder='Email Address'
              name='email'
              autoComplete='off'
              value={email}
            />
          </div>
          <div className='form-group'>
            <input className='lead'  data-aos="zoom-in-right" data-aos-duration="2500"
              onChange={handleChange}
              type='password'
              placeholder='Password'
              name='password'
              value={password}
            />
          </div>
          <div className='form-group'>
            <input className='lead'  data-aos="zoom-in-right" data-aos-duration="2800"
              onChange={handleChange}
              type='password'
              placeholder='Confirm Password'
              name='password2'
              value={password2}
            />
          </div>
          <input className='lead'  data-aos="fade-left" data-aos-duration="3000"
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
        <p className='lead' style={{ color: "white", marginBottom: "30px" }}>
          Already have an account? <Link to='/login'>Sign In</Link>
        </p>
      </div>
    </Fragment>
  );
};

Register.propTypes = {
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(null, { register })(Register);
