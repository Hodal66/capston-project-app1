import React from 'react'
import Profile from './Profile/Profile';
import Footer from './Footer/Footer';
import Nav from '../Navigation/Nav';
import './Home.css'

function Home() {
  return (
    <div className='home-container'>
        <Nav />
        <Profile />
        <Footer />


    </div>
  )
}

export default Home