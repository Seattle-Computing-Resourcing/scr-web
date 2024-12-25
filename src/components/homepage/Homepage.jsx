import React from 'react'
import './Homepage.css'

const Hero = () => {
  return (
    <div className='homepage'>
      <div className='hero-container'>
        <h1>Seattle Computing Resourcing</h1>
      </div>

      <div className='location'>
        <h1>Location</h1>
        <p>We are located in Seattle, WA!</p>
      </div>
    </div>
  )
}

export default Hero;