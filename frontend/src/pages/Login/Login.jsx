import React from 'react'
import image from '../Sign-up/Assets/background.png';
import Closed from '../Sign-up/Assets/eye-slash.png'
import { useState } from 'react';
import { Link } from 'react-router-dom';


const Login = () => {
    const [passwordShown, setPasswordShown] = useState(false);
	
	// Password toggle handler
	const togglePassword = () => {
		// When the handler is invoked
		// inverse the boolean state of passwordShown
		setPasswordShown(!passwordShown);
	};
  return (
    <div className="login h-screen place-content-start box-border min-h-32 flex flex-row " style={{ backgroundImage:`url(${image})` , backgroundRepeat:"no-repeat"}}>
          <div className="login-l h-screen place-content-start box-border min-h-32 w-2/4 flex flex-row">
          <form  class="container place-content-start text-left gap-x-7 bg-white w-full">
            <div className='place-content-start text-left gap-x-7 bg-white w-3/4'>
                    <h2 className='font-bold text-6xl place-content-start w-full ml-16 mt-6'>Welcome Back</h2>
          <p className='mt-5 ml-20'>Log in to continue</p>
    <div className='border-solid ml-20 mt-5 w-full'>
    <label for="email" className=''><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" required className='border-solid border-2 border-black mt-2 w-full h-9'/>
    </div>
    <div className="password border-solid my-3 w-full ml-20">
						<label htmlFor="Password"><b>Password</b></label>
						<div className="tla flex border border-black border-solid p-1 w-full justify-between">
							<input  type={passwordShown ? 'text' : 'password'} className=' border-black mt-2 w-4/5 h-9 ' placeholder='6+ character long' />
						<button onClick={togglePassword}>
							<img src={Closed} alt="" />{' '}
						</button>
						</div>
              <div className='flex flex-row  mt-3 w-full'>
                  <h1 className='flex items-start w-3/4'>
                    <input type="radio" name="Keep me Signed in" className='mt-1' />
                      Keep me Signed in 
                        </h1>

                        <Link className='flex items-end -ml-1 text-red-600'>forgot password</Link>
                        </div>
                     
						
					</div>
              <button type="submit" class="btn ml-20 mt-5 bg-blue-800 w-full h-10 text-white">Login</button>
            </div>
                 <p className='pt-5 ml-56'>Don't have an account? <Link to='/signup'>sign up</Link> </p>
          </form>
          </div>
    </div>
  )
}

export default Login
