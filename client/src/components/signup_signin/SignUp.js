import React from 'react'
import './SignUp.css'
import { NavLink } from 'react-router-dom'

const SignUp = () => {
  return (
    <div>
      <section>
        <div className="sign_container">
          <div className='sign_header'>
            <img src='./blacklogoamazon.png' alt="amazonlogo" />
          </div>
          <div className='sign_form'>
            <form>
              <h1>Sign-Up</h1>
              <div className="form_data">
                <label htmlFor="fname">Your Name</label>
                <input type='text' name='fname' id='fname' />
              </div>
              <div className="form_data">
                <label htmlFor="email">Email</label>
                <input type='text' name='email' id='email' />
              </div>
              <div className="form_data">
                <label htmlFor="mobile">Mobile Number</label>
                <input type='number' name='mobile' id='mobile' />
              </div>
              <div className="form_data">
                <label htmlFor='password'>Password</label>
                <input type='password' name='password' placeholder='At least 6 character' id='password' />
              </div>
              <div className="form_data">
                <label htmlFor='password'>Confirm Password</label>
                <input type='password' name='password' id='password' />
              </div>
              <button className='signin_btn'>Continue</button>
              <div className="signin_info">
                <p>Already have an account?</p>
                <NavLink to="/login">Signin</NavLink>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SignUp
