import React, { useEffect, useState } from 'react'
import ProductPreview from './ProductPreview'
const Grid = () => {
    const [products, setProducts] = useState([])
    const [isLoading, setisLoading] = useState(false)
    useEffect(() => {
      let uploadProducts = async () => {
        setisLoading(true)
        let categoryResponse = await fetch(`https://fakestoreapi.com/products/category/men's clothing`)
        let categoryJson = await categoryResponse.json()
        setisLoading(false)
        setProducts(categoryJson)
      }
      uploadProducts()
    }, [])
    


  return isLoading?
  (
    <div className='flex flex-wrap justify-between gap-2 w-4/5 mx-auto'>
        <ProductPreview title={'Jordan'} description={'Altas bambas negras re facheritas mi rey, ni messi se animo a tantos, es la mezcla entre lebron y messi'}/>
        <ProductPreview title={'Jordan'} description={'Altas bambas negras re facheritas mi rey, ni messi se animo a tantos, es la mezcla entre lebron y messi'}/>
        <ProductPreview title={'Jordan'} description={'Altas bambas negras re facheritas mi rey, ni messi se animo a tantos, es la mezcla entre lebron y messi'}/>
        <ProductPreview title={'Jordan'} description={'Altas bambas negras re facheritas mi rey, ni messi se animo a tantos, es la mezcla entre lebron y messi'}/>
    </div>
  )
  :
  (
    <div className='flex flex-wrap justify-between gap-2 w-4/5 mx-auto'>
        {products && products.map((singleProduct)=>{
            return <ProductPreview title={singleProduct.title} src={singleProduct.image} description={singleProduct.description}/>
        })}
        </div>
  )
}

export default Grid