import React from 'react'
import image from '../../src/Sign/Assets/background.png'

const Login = () => {
  return (
    <div className="login h-screen place-content-start box-border min-h-32 flex flex-row" style={{ backgroundImage:`url(${image})` , backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
          <form action="/action_page.php" class="container place-content-start text-left gap-x-7 bg-white w-1/2 ">
            <div>
                    <h1>Welcome Back</h1>
          <p>Log in to continue</p>

    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" required className='border-solid border-2 border-black mt-2 w-full h-9'/>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required />

    <button type="submit" class="btn">Login</button>
            </div>
      
          </form>
    </div>
  )
}

export default Login
