import React from 'react';
import Lottie from  "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/Avatar.png';


const Home = () => {
  return (
    <div >
      <div className='HomePage'>  

        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>ARYAN CHOUDHARY</b></h1>
          <Typed/>   
        </div>

        <Lottie 
          className="illustration" 
          animationData={SpaceBoy} 
          loop={true} 
        />
        
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1>
          <p>
            I love the process of changing a raw idea into a website or a product 
            that impacts lives. 
            I want to do work that challenges me as a developer & work that I can 
            be proud of.<br /><br />
            
I am  learning <b> Java </b> and know a bit of <b> Python </b> and am working on a few projects in the MERN stack.
I plan to learn <b> Next.js, Three.js and Typescript in the near future.</b>

Also, I love to watch movies and TV shows in my free time. 
          </p>
        </div>
        <Tilt>
          <img className='Avatar' src={Avatar} alt="" />
        </Tilt>
      </div>
    </div>
  )
}

export default Home