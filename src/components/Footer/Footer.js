import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <footer>
        
        <div className="container  text-center">
            <ul className='d-flex justify-content-center'>
                <li><a href='!#'>Register</a></li>
                <li><a href='!#'>Forum</a></li>
                <li><a href='!#'>Affiliate</a></li>
                <li><a href='!#'>FAQ</a></li>
            </ul>            
            <ul className='d-flex justify-content-center'>
                <li><a href='!#'><i className="fa-brands fa-facebook fa-2x"></i></a></li>
                <li><a href='!#'><i className="fa-brands fa-twitter fa-2x"></i></a></li>
                <li><a href='!#'><i className="fa-brands fa-github fa-2x"></i></a></li>
                <li><a href='!#'><i className="fa-brands fa-google-plus-g fa-2x"></i></a></li>
            </ul>       
            <p className="fw-bold fs-5 text-white">© 2021. Foodera. All rights reserved.</p>
        </div>
        
    </footer>
  )
}

export default Footer