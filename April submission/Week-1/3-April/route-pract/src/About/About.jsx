import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

const About = () => {
  return (
    <div className='text-center p-2'>
      This is a About Page.
      <br />
      <Link to="/about/123" className='text-blue-500'>
        Visit under the About page.
      </Link>
      <Outlet/>
    </div>
  )
}

export default About
