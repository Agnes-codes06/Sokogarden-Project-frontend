import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {

  // initialize our hooks
  const[username,setUsername]=useState()
  const[email,setEmail]=useState()
  const[phone,setPhone]=useState()
  const[password,setPassword]=useState()


  return (
    <div className='row justify-content-center'>
      <div className='col-md-6 card shadow'>

        <h1>Sign Up</h1>

        <form action="">

          {/* call the function to see what am typing */}
          {/* {username} */}
          {/* {email} */}
          {/* {phone} */}
          {/* {password} */}


          <input type="text" placeholder='Enter Your Name' className='form-control' value={username} onChange={(e)=>setUsername(e.target.value)}/>
          <br />
          <br />
          <input type="email"  placeholder='Enter Your Email' className='form-control' value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <br />
          <br />
          <input type="tel" placeholder='Enter Your Number' className='form-control' value={phone} onChange={(e)=>setPhone(e.target.value)}/>
          <br />
          <br />
          <input type="password" placeholder='Enter Your Password' className='form-control' value={password} onChange={(e)=>setPassword(e.target.value)}/>
          <br />
          <input type="submit"  value="Signup" className='btn bg-primary text-white w-100'/>
          <br />
          <p>Already have an account?<Link to="/signin">Sign in</Link></p>




        </form>


      </div>



    </div>
  )
}



export default SignUp