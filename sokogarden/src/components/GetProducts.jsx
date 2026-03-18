import React from 'react'
import { useState,useEffect} from "react"; 
import axios from "axios"; 
import { useNavigate } from 'react-router-dom';

const GetProducts = () => {

  const[loading,setLoading]=useState("")
  const[error,setError]=useState("")
  const[products,setProducts]=useState([])

  const navigate=useNavigate()

  // variable to store image
  const image_url="https://agnes.alwaysdata.net/static/images/"


  // create a function to get our products from the api

  const fetchProducts=async()=>{

    setLoading("Please wait as we retrieve your products")

    try {

      const response=await axios.get("https://agnes.alwaysdata.net/api/getproductdetails")

      console.log("the response is",response)

      setProducts(response.data)
      setLoading("")
      
    } catch (error) {

      setLoading("")
      setError(error.message)
      
    }

  }


  // end of function to call the use effect

  useEffect(()=>{
    fetchProducts()
  },[])


  return (
    <div className='row'>
      <h1>Available Products</h1>

      <p className='text-warning'>{loading}</p>
      <p className='text-danger'>{error}</p>

      {/* loop through our product */}
      {products.map((product)=>(

      
      <div className='col-md-3 justify-content-center'>

        <div className='card shadow m-2'>

        <img src={image_url + product.product_photo} alt="cake" className='product_img mt-4' />

        <div className='card-body'>

          <h4 className='text-success'>{product.product_name}</h4>
          <p className='text-secondary'>{product.product_description}</p>
          <p className='text-warning'>Ksh:{product.product_cost}</p>

          <input type="button" value="Purchase Now" className='btn btn-secondary w-100' onClick={()=>navigate("/mpesa",{state:{product}})} />


        </div>


      </div>

      </div>

      ))}

      
    </div>
  )
}

export default GetProducts