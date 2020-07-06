import React from "react";

const Eventregister = () => {
  return (
    <div className='eventregistration container' data-aos='zoom-in'>
      <h1 className='large' style={{ color: "" }}>
        Register Yourself for "GAME OF CODE"
      </h1>

      <form className='form' data-aos='zoom-out'>
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
    </div>
  );
};

export default Eventregister;
