import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leader Today</h2>
        <p>Embark on a transformative educational journey with ou university's
           comprehensive education programs</p>
        <p>With a faculty comprised of industry experts and scholars, state-of-the-art facilities,
          and a diverse student body, we provide an unparalleled academic experience that prepares
          you to excel in your chosen field. Join us and embark on a transformative journey that
          will empower you to make a meaningful impact on the world.</p>
      </div>
    </div>
  )
}

export default About
