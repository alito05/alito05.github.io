import React from 'react'
import PropTypes from 'prop-types'
import airJordan from '../../media/img/airJordan.png'

const NavBar = props => {
  return (
    <div className='bg-black w-full h-full'>
        <h1>Layout</h1>
        <ul>
          <li > <a href='/'> <img src={airJordan}/></a></li>
          {/* <li > <a href='#'></a>Botas</li>
          <li > <a href='#'></a></li>
          <li > <a href='#'></a></li> */}
        </ul>
      </div>

  )
}

NavBar.propTypes = {}

export default NavBar