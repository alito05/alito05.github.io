import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import ProductPreview from './ProductPreview'
const Grid = () => {
    const [products, setProducts] = useState([])
    const [isLoading, setisLoading] = useState(false)
    const {pathname} = useLocation()
    console.log('location',pathname)
    useEffect(() => {
      let uploadProducts = async () => {
        setisLoading(true)
        let category = ''
        switch(pathname){
          case '/men':
            category = `/category/men's clothing`
            break
          case '/women':
            category = `/category/women's clothing`
            break
          case '/kids':
            category = `/category/jewelery`
            break
          case '/all':
            category = ``
            break
        }
        let toFetch = `https://fakestoreapi.com/products${category}`
        console.log('toFetch', toFetch)
        let categoryResponse = await fetch(toFetch)
        let categoryJson = await categoryResponse.json()
        setisLoading(false)
        setProducts(categoryJson)
      }
      uploadProducts()
    }, [pathname])
    


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
        {products && products.map((singleProduct, key)=>{
            return <ProductPreview key={key} title={singleProduct.title} src={singleProduct.image} description={singleProduct.description} id={singleProduct.id}/>
        })}
        </div>
  )
}

export default Grid