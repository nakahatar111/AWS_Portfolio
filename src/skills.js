import React from 'react';
import './skills.css';

function Skills() {
  return (<React.Fragment>
    <div id = 'skills' className='d-flex flex-column align-items-center' style={{minHeight: "100vh", backgroundColor:'#2988bc'}}>
        <div className='text-center text-white' style={{marginTop:'100px'}}>
          <h1 style={{fontSize:'50px', fontWeight:'650'}}>Skills</h1>
          <p style={{fontSize:'20px', fontWeight:'100'}}>Below are some of my skills, and I'm always looking to learn more.</p>
        </div>
        <div className='d-flex flex-wrap text-center text-white align-content-stretch justify-content-center my-3' style={{height:'auto', maxWidth:'1300px'}}>
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
              <p>I explored the field of machine learning through 
                <span className='highlight'> Jason Brownlee's Generative 
                Adversarial Networks with Python</span> to 
                familiarize myself with <span className='highlight'> Keras </span>and <span className='highlight'> TensorFlow </span> and refined the 
                low-level understanding of many NN architectures and essential 
                practices through <span className='highlight'> CS231n: </span> Convolutional Neural Networks for 
                Visual Recognition from <span className='highlight'> Stanford University </span>
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
              <p>I have over<span className='highlight'> four years </span>
              of experience programming in Java, making me resilient to many 
              tasks in developing software.
              <span className='highlight'> Object-oriented programming </span>
              in Java has been one of my expertise, and I have previously 
              developed a
              <span className='highlight'> Binary-Text File converter</span>,
              <span className='highlight'> Shortest Path Finder of Weighted Graph</span>, 
              <span className='highlight'>Banking Systems</span>, 
              <span className='highlight'>etc</span>.
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
              <h4>Parallel Computing</h4>
              <p>I examined the uses of <span className='highlight'> parallel 
              processing </span>in low-level and high-level implementation 
              with<span className='highlight'> multiple threads </span>to 
              distribute computational tasks among these threads using 
              <span className='highlight'> OpenMD</span>, 
              <span className='highlight'>mutexes</span>, and 
              <span className='highlight'> conditional variables</span>.
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
              <p>Over the past several years, I have familiarized myself with
                <span className='highlight'> Python </span>and many of its
                <span className='highlight'> libraries</span>, such as
                <span className='highlight'> Pandas</span>,
                <span className='highlight'> NLTK</span>,
                <span className='highlight'> NumPy</span>, and 
                <span className='highlight'>TensorFlow</span>
                , through my research, coursework, and personal projects. 
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
              <p>I have experience in Node.js and its modules through building 
                many <span className='highlight'>static</span> and 
                <span className='highlight'>dynamic webpages</span>, including 
                <span className='highlight'>Express</span>, 
                <span className='highlight'>Cors</span>, 
                <span className='highlight'>MySQL</span>, and 
                <span className='highlight'>Bcrypt</span>.
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
              <p>I have extensive experience in using React for both 
                <span className='highlight'>functional</span> and 
                <span className='highlight'>class-based component programming
                </span>. Over the past <span className='highlight'>two years</span>
                , I have developed a <span className='highlight'>static portfolio webpage</span> 
                and a <span className='highlight'>dynamic social media webpage</span> using 
                <span className='highlight'>MySQL</span>.
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
              <p>Skill description coming soon!
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
              <p>Skill description coming soon!
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
              <p>Skill description coming soon!
              </p>
          </div>
        </div>
      </div>
  </React.Fragment>  
  );
}

export default Skills;