/* eslint-disable react/style-prop-object */

import React from 'react'
import { HeadMenu } from './styled';


const NavBar = () => {
  return (
    <HeadMenu> 
        <img 
        src='/img/superMario.png' 
        alt="Super Mario"
        width="10%"
        ></img>
    </HeadMenu>
  )
}

export default NavBar;