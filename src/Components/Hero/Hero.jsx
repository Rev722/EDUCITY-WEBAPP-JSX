import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>We Ensure better education for a better world</h1>
        <p>Our cutting-edge curriculum is designed to empower students
            to achieve their full potential.
        </p>
        <button className='btn'>Learn More <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
