import React from 'react'
import PropTypes from 'prop-types'
import airJordan from '../../media/img/airJordan.png'
import Cart from '../../media/img/Cart.png'
import user from '../../media/img/user.png'
import { Link } from 'react-router-dom'
 /*
 TO DO:
  * Use diferent Navbar in starting page vs others.

 */
const NavBar = props => {
  return (
    <div className='fixed w-full top-0 p-6 flex justify-between text-center bg-white'>
        <Link to={'/'}><img className='h-5 pt-1' src={airJordan}/></Link>
        <ul className='flex justify-between w-3/12 font-racing-one text-base'>
          <Link to={'/men'}>MEN</Link>
          <Link to={'/women'}>WOMEN</Link>
          <Link to={'/kids'}>KIDS</Link>
          <Link to={'/All'}>ALL</Link>
        </ul>
        <ul className='flex justify-between w-20'>
          <Link to={'/user'}><img src={user}/></Link>
          <Link to={'/cart'}><img src={Cart}/></Link>
        </ul>
      </div>

  )
}

NavBar.propTypes = {}

export default NavBar