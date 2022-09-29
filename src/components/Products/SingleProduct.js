import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const SingleProduct = () => {
  const [product, setProduct] = useState(undefined)
  const [isLoading, setIsLoading] = useState(false)
  let sizes = ['8','8.5', '9','9.5', '10','10.5', '11','11.5', '12']
  let colors = ['#352C2C', '#882C1D', '#6389CB', '#F2C758', '#43BBCB']
    let {id} = useParams()
    console.log('productID',id)
    useEffect(() => {
      let getSingleProduct = async (productID) =>{
        setIsLoading(true)
        let singleProductResponse = await fetch(`https://fakestoreapi.com/products/${productID}`)
        let singleProductJson = await singleProductResponse.json()
        setProduct(singleProductJson)
        setIsLoading(false)
      }
      getSingleProduct(id)
    }, [id])
    
  return !isLoading && product ? (
    <div className='h-screen px-10 pt-10'>
      <div className='flex h-3/4 w-full justify-between '>
        <div className='w-4/12 py-12 flex flex-col'>
          <div className='text-xl font-bold mb-4'>{product.category}</div>
          <div className='text-4xl font-bold mb-6'>{product.title}</div>
          <div className='text-xl font-medium opacity-50 w-4/5'>{product.description}</div>
        </div>
        <div className='pb-2 w-auto'><img src={product.image}className='h-full w-auto'/></div>
        <div className='w-2/12 flex items-center mb-14'>
          <div>
            <div className='text-xl font-bold'>Select Size (us)</div>
            <div className='flex flex-wrap'>{sizes.map((size)=>{
              return(
                <div className='w-12 h-12 text-xl font-semibold border border-slate-300 m-2 text-center py-2 px-1'>
                  {size}
                </div>
              )
            })}</div>
          </div>
        </div>

      </div>
      <div className='flex justify-between items-center p-10 h-24 border'>
        <div className='flex w-1/12 justify-between'>
          <div>Prev</div>
          <div>Next</div>
        </div>
        <div>ADD TO CART - ${product.price}</div>
      </div>
    </div>
  ):(<div>Loading</div>)
}

export default SingleProduct