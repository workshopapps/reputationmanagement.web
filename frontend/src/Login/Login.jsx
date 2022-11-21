import React from 'react'
import image from '../../src/Sign/Assets/background.png'

const Login = () => {
  return (
    <div className="login bg-img" style={{ backgroundImage:`url(${image})`}}>
          <form action="/action_page.php" class="container">
          <h1>Login</h1>

    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" required />

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required />

    <button type="submit" class="btn">Login</button>
          </form>
    </div>
  )
}

export default Login
