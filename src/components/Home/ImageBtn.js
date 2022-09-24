import React from 'react'
import { Link } from 'react-router-dom'
const ImageBtn = ({src, title, isDual, route}) => {
  return (
    <div className={`w-11/12 h-auto my-4 ${isDual?`mx-2`:`mx-auto`}`} >
            <img className='' src={src}/>
            <div className='relative left-12 bottom-32 w-2/12 text-center font-bold w-auto'>
                <h2 className='text-white mb-4 text-4xl'>{title}</h2>
                <Link to={`/${route}`}><button  className='w-24 h-8 text-md bg-white rounded-full '>Buy</button></Link>
            </div>
        </div>
  )
}

export default ImageBtn