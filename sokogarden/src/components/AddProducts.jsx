import React, { useState } from 'react'
import axios from "axios";

const AddProducts = () => {


  // initialize hooks
  const[product_name,setProduct_name]=useState("")
  const[product_description,setProduct_description]=useState("")
  const[product_cost,setProduct_cost]=useState("")
  const[product_photo,setProduct_photo]=useState("")


  const[loading,setLoading]=useState("")
  const[success,setSuccess]=useState("")
  const[error,setError]=useState("")


  // function to send data to the database/server
  const submit= async(e)=>{

    e.preventDefault()
    setLoading("Please wait as we upload your product")

    try {

      const data=new FormData()
      data.append("product_name",product_name)
      data.append("product_description",product_description)
      data.append("product_cost",product_cost)
      data.append("product_photo",product_photo)

      // post data to backend API
      const response= await axios.post("https://agnes.alwaysdata.net/api/addproducts",data)

      setLoading("")

      setSuccess(response.data.message)

            // reset form
      setProduct_name("")
      setProduct_description("")
      setProduct_cost("")
      setProduct_photo("")

      
    } catch (error) {

      setLoading("")
      setError(error.message)
      
    }

  }

  return (
    <div className='row justify-content-center'>
      <div className='col-md-6 card shadow'>
        <h1>Upload Products</h1>
        <form action="" onSubmit={submit}>

          {/*  Bind user loding, success, error messages  */}

          <p className='text-warning'>{loading}</p>
          <p className='text-success'>{success}</p>
          <p className='text-danger'>{error}</p>

          <input type="text" placeholder='Enter products name'className='form-control' value={product_name} onChange={(e)=> setProduct_name(e.target.value)} />
          <br />

          <textarea name="" id="" placeholder='Describe your product'className='form-control' value={product_description} onChange={(e)=>setProduct_description(e.target.value)}></textarea>
          <br />

          <input type="number" placeholder='Enter product cost' className='form-control' value={product_cost} onChange={(e)=>setProduct_cost(e.target.value)} />
          <br />

          <label><b>Upload Product Photo</b></label>
          <input type="file" placeholder='Enter product photo' className='form-control' accept="images/*" onChange={(e)=>setProduct_photo(e.target.files[0])}/> 

          <br />
      
          <input type="submit" placeholder='upload Products' className='form-control btn btn-primary w-100 text-white'/>


        </form>


      </div>

      


    </div>
  )
}

export default AddProducts