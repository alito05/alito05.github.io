import React from 'react'
import { useParams } from 'react-router-dom'
const SingleProduct = () => {
    let productID = useParams()
    console.log('productID',productID)
    
  return (
    <div>SingleProduct</div>
  )
}

export default SingleProduct