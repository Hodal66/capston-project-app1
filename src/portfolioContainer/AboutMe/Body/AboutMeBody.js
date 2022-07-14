import React from 'react'
import './Bodycss.css'
function AboutMeBody() {
  return (
    <div className="Container">
        <div className="imageContainer">
        <img src={require('../../../Assets/Home/potifolioprofile.jpg')} alt="no internet connection" />
        </div>
        <div className="AboutContainer">
            <div className='Contant-header'>
                <p>Full stack web and mobile developer with backend knowldge of MERN stack
                    with redux along with a knack of building application with almost efficient
                    strong professifession with a BSC willing to be an asset fae an aorganisation
                </p>
            </div>

            <div className='Content-body'>
                <h1>Here are a Few highlight</h1>
                <ul className='mylists'>
                    <li className='list'><div className='circle'></div>Full Stack Web and mobile developer</li>
                    <li className='list'><div className='circle'></div>Integrate Front End as per design</li>
                    <li className='list'><div className='circle'></div>React and React Native</li>
                    <li className='list'><div className='circle'></div>Building Rest API</li>
                    <li className='list'><div className='circle'></div>Managing Dabase</li>
                    
                </ul>

            </div>
            <div className='content-btn'>
                <button className='primary-btn btn hireMe-btn'>Hire Me</button>
                <a href="ehizcv.pdf" download="Hodal ehizcv.pdf">
                <button className='primary-btn btn getresume-btn'>Get Resume</button>
                </a>
            </div>

        </div>
    </div>
  )
}

export default AboutMeBody;