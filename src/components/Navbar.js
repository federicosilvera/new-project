import React from 'react'
import "../App.css"
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
    
    <div className='flex-container'>
        <h1 className='icon'><Link to="/home">Project</Link></h1> 
            <ul>
              
                <li><Link to="/home">
                Home </Link>
                </li>
                <li>
                Contact
                </li>
                
                <li><Link to="/signin">
                Sign in</Link>
                </li>
                
                <li>
                Prices
            </li>
          </ul>          
    </div>
    </>
  )
}
