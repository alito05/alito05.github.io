import React from 'react'
import { Link } from 'react-router-dom'
import Loading_icon from '../../media/img/Loading_icon.gif'

const ProductPreview = ({title, description, src, id}) => {
  return (
    <Link to={`/all/${id}`} className='w-2/5 h-auto '>
        <img src={`${src|| Loading_icon}`} className={'mx-auto mt-8 h-2/4 w-auto'} alt="loading..." />
        <div className='m-auto w-full text-center '>
            <p className='font-bold text-xl'>{title}</p>
            <p className='font-semibold text-gray-500'>{description}</p>
        </div>
    </Link>
  )
}

export default ProductPreview