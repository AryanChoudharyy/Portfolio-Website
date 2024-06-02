import React from 'react';

import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
            Hi, my name is <b>Aryan Choudhary</b> and I am from Gujarat, India.
            I'm an aspiring <b>MERN stack web developer</b> and a first year college student pursuing <b>BS in CSE  in Scaler School of Technology</b>. <br/><br/>
           <b></b>  
            I love to create original projects with beautiful designs, you can check out some of my work in the projects section.<br/><br/>
            I am <b>open</b> to new collaborations or work where I can contribute and grow. <br/>
            Apart from coding I love to watch good quality content.
          </p>
        </div>

        <div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        </div>

      </div>
      
      
    </>
  )
}

export default About