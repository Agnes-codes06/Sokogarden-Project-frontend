import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios";

const SignUp = () => {

  // initialize our hooks
  const[username,setUsername]=useState("")
  const[email,setEmail]=useState("")
  const[phone,setPhone]=useState("")
  const[password,setPassword]=useState("")


  // initialize other hooks like loading,success,error
  const[loading,setLoading]=useState("")
  const[success,setSuccess]=useState("")
  const[error,setError]=useState("")



  // create a function to send our data to the backend(username,email,phone,password)

  const submit=async(e)=>{

    e.preventDefault()
    setLoading("Please wait as we upload your data")

    try {

      const data=new FormData()

      data.append("username",username)
      data.append("email",email)
      data.append("phone",phone)
      data.append("password",password)


      // call the api to send data to the database
      const response=await axios.post("https://agnes.alwaysdata.net/api/signup",data)

      setLoading("")

      setSuccess(response.data.message)

      // reset the form  after sending data
      setUsername("")
      setEmail("")
      setPhone("")
      setPassword("")
      
    } catch (error) {

      setLoading("")
      setError(error.message)
      
    }


  }


  return (
    <div className='row justify-content-center'>
      <div className='col-md-6 card shadow'>

        <h1>Sign Up</h1>

        <form action="" onSubmit={submit}>

          <p className='text-warning'>{loading}</p>
          <p className='text-success'>{success}</p>
          <p className='text-danger'>{error}</p>

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
          <input type="password" placeholder='Enter Your Password' className='form-control' value={password} onChange={(e)=>setPassword(e.target.value)} required/>
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