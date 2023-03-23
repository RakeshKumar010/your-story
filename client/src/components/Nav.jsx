import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  

  return (

      <div className='navMain'>
          <div className="logo">
              <p>Your Story</p>
          </div>
          <ul>
              <li>
                  <Link to='/'>Home</Link>
              </li>
              <li>

                  <Link to='/Books'>Books</Link>
              </li>
              <li>

                  <Link to='/Stories'>Stories</Link>
                
              </li>
              <li>

                  <Link to='/About'>About</Link>
              </li>
              <li>

                  <Link to='/Contact'>Contact</Link>
              </li>
                  




          </ul>
          <div className="dashbord">
                <Link to='/addstory'>Add Story</Link>
                <Link to='/dashboard'>Dashboard</Link>
          </div>
    </div>
  )
}

export default Nav