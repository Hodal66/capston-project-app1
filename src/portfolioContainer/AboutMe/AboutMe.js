import React from 'react'
import Body from './Body/AboutMeBody'
import HeaderAboutme from '../layout/HeaderAboutme'
import './AboutMe.css'
function AboutMe() {
  return (
    <div className='container'>
      <HeaderAboutme />
        <Body />
    </div>
  )
}

export default AboutMe