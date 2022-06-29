import React from 'react';
import './skills.css';

function Skills() {
  return (<React.Fragment>
    <div id = 'skills' className='d-flex flex-column align-items-center' style={{minHeight: "100vh", backgroundColor:'#2988bc'}}>
        <div className='text-center text-white' style={{marginTop:'100px'}}>
          <h1 style={{fontSize:'50px', fontWeight:'650'}}>Skills</h1>
          <p style={{fontSize:'20px', fontWeight:'100'}}>Below are some of my skills, and I'm always looking to learn more.</p>
        </div>
        <div className='d-flex flex-wrap text-center text-white align-content-stretch justify-content-center my-5' style={{height:'auto', maxWidth:'1300px'}}>
          <div className='skillbox'>
            <img
                alt="Deep Learning"
                src= '/icons/deep learning.jpg'
                width="110"
                height="110"
                style={{borderRadius: "50%", margin: '20px'}}
                color='blue'
                />
              <h4>Machine Learning</h4>
              <p>I have significant research experience in the field of 
                computer vision, including Computer Vision Tools for Locating 
                Nitrogren-Vacancy Centers. I've also created dozens of 
                programs using libraries such as OpenCV and OpenGL these 
                include my object tracker, collage generator, game engine, ray 
                casting simulation, and many more.
              </p>
          </div>
          <div className='skillbox'>
            <img
                alt="Java"
                src= '/icons/java.jpg'
                width="110"
                height="110"
                style={{borderRadius: "50%", margin: '20px'}}
                color='blue'
                />
              <h4>Java</h4>
              <p>I have over four years of experience programming in Java, making
                me resilient to many tasks in developing softwares. Object 
                oriented programming in Java has been one of my expertise, and 
                developed  
              </p>
          </div>
          <div className='skillbox'>
            <img
                alt="HPC"
                src= '/icons/hpc.jpg'
                width="110"
                height="110"
                style={{borderRadius: "50%", margin: '20px'}}
                color='blue'
                />
              <h4>High Performance Computing</h4>
              <p>I have significant research experience in the field of 
                computer vision, including Computer Vision Tools for Locating 
                Nitrogren-Vacancy Centers. I've also created dozens of 
                programs using libraries such as OpenCV and OpenGL these 
                include my object tracker, collage generator, game engine, ray 
                casting simulation, and many more.
              </p>
          </div>
          <div className='skillbox'>
            <img
                alt="Python"
                src= '/icons/python.jpg'
                width="110"
                height="110"
                style={{borderRadius: "50%", margin: '20px'}}
                color='blue'
                />
              <h4>Python</h4>
              <p>I have significant research experience in the field of 
                computer vision, including Computer Vision Tools for Locating 
                Nitrogren-Vacancy Centers. I've also created dozens of 
                programs using libraries such as OpenCV and OpenGL these 
                include my object tracker, collage generator, game engine, ray 
                casting simulation, and many more.
              </p>
          </div>
          <div className='skillbox'>
            <img
                alt="NodeJS"
                src= '/icons/nodejs.jpg'
                width="110"
                height="110"
                style={{borderRadius: "50%", margin: '20px'}}
                color='blue'
                />
              <h4>Node JS</h4>
              <p>I have significant research experience in the field of 
                computer vision, including Computer Vision Tools for Locating 
                Nitrogren-Vacancy Centers. I've also created dozens of 
                programs using libraries such as OpenCV and OpenGL these 
                include my object tracker, collage generator, game engine, ray 
                casting simulation, and many more.
              </p>
          </div>
          <div className='skillbox'>
            <img
                alt="React"
                src= '/icons/react.jpg'
                width="110"
                height="110"
                style={{borderRadius: "50%", margin: '20px'}}
                color='blue'
                />
              <h4>React</h4>
              <p>I have significant research experience in the field of 
                computer vision, including Computer Vision Tools for Locating 
                Nitrogren-Vacancy Centers. I've also created dozens of 
                programs using libraries such as OpenCV and OpenGL these 
                include my object tracker, collage generator, game engine, ray 
                casting simulation, and many more.
              </p>
          </div>
          <div className='skillbox'>
            <img
                alt="Cpp"
                src= '/icons/cpp.jpg'
                width="110"
                height="110"
                style={{borderRadius: "50%", margin: '20px'}}
                color='blue'
                />
              <h4>C++</h4>
              <p>I have significant research experience in the field of 
                computer vision, including Computer Vision Tools for Locating 
                Nitrogren-Vacancy Centers. I've also created dozens of 
                programs using libraries such as OpenCV and OpenGL these 
                include my object tracker, collage generator, game engine, ray 
                casting simulation, and many more.
              </p>
          </div>
          <div className='skillbox'>
            <img
                alt="WebDev"
                src= '/icons/webdev.jpg'
                width="110"
                height="110"
                style={{borderRadius: "50%", margin: '20px'}}
                color='blue'
                />
              <h4>JavaScript, HTML, CSS</h4>
              <p>I have significant research experience in the field of 
                computer vision, including Computer Vision Tools for Locating 
                Nitrogren-Vacancy Centers. I've also created dozens of 
                programs using libraries such as OpenCV and OpenGL these 
                include my object tracker, collage generator, game engine, ray 
                casting simulation, and many more.
              </p>
          </div>
          <div className='skillbox'>
            <img
                alt="SQL"
                src= '/icons/sql.jpg'
                width="110"
                height="110"
                style={{borderRadius: "50%", margin: '20px'}}
                color='blue'
                />
              <h4>SQL Database</h4>
              <p>I have significant research experience in the field of 
                computer vision, including Computer Vision Tools for Locating 
                Nitrogren-Vacancy Centers. I've also created dozens of 
                programs using libraries such as OpenCV and OpenGL these 
                include my object tracker, collage generator, game engine, ray 
                casting simulation, and many more.
              </p>
          </div>
        </div>
      </div>
  </React.Fragment>  
  );
}

export default Skills;