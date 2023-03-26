import React from "react";
import Logo from '../logo/logo.png'

const Footer = () => {
  return (
      <footer>
          <img src={Logo} alt=''/>
          <span className=''>Made with ❣ and <b>React.js</b></span>
      </footer>
  )
}

export default Footer