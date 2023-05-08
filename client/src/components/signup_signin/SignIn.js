import React, { useState } from 'react'
import "./SignUp.css"
import { NavLink } from 'react-router-dom'

const SignIn = () => {

  const [logdata,setData] = useState({
    email:"",
    password:""
  });
  console.log(logdata);

  const addData = (e)=>{
    const {name, value} = e.target;

    setData(()=>{
      return{
        ...logdata,
        [name]:value
      }
    })
  }

  return (
    <>
      <section>
        <div className="sign_container">
          <div className='sign_header'>
            <img src='./blacklogoamazon.png' alt="amazonlogo" />
          </div>
          <div className='sign_form'>
            <form>
              <h1>Sign-In</h1>
              <div className="form_data">
                <label htmlFor="email">Email</label>
                <input type='text'onChange={addData} value={logdata.email} name='email' id='email' />
              </div>
              <div className="form_data">
                <label htmlFor='password'>Password</label>
                <input type='password' onChange={addData} value={logdata.password} name='password' placeholder='At least 6 character' id='password' />
              </div>
              <button className='signin_btn'>Continue</button>
            </form>
          </div>
          <div className='create_accountinfo'>
            <p>New To Amazon</p>
            <NavLink to="/signup"><button className='create_btn'>Create Your Amazon Account</button></NavLink>
          </div>
        </div>
      </section>
    </>
  )
}

export default SignIn
