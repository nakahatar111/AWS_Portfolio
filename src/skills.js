import React from 'react';
import './skills.css';

function Skills() {
  return (<React.Fragment>
    <div id = 'skills' className='d-flex flex-column align-items-center' style={{minHeight: "100vh", backgroundColor:'#2988bc'}}>
        <div className='text-center text-white' style={{marginTop:'80px'}}>
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
              <span className='highlight'> Banking Systems</span>, 
              <span className='highlight'> etc</span>.
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
              <span className='highlight'> mutexes</span>, and 
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
                <span className='highlight'> TensorFlow</span>
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
                <span className='highlight'> dynamic webpages</span>, including 
                <span className='highlight'> Express</span>, 
                <span className='highlight'> Cors</span>, 
                <span className='highlight'> MySQL</span>, and 
                <span className='highlight'> Bcrypt</span>.
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
              <h4>React JS</h4>
              <p>I have extensive experience in using React for both 
                <span className='highlight'> functional</span> and 
                <span className='highlight'> class-based component programming
                </span>. Over the past <span className='highlight'>two years</span>
                , I have developed a <span className='highlight'>static portfolio webpage </span> 
                and a <span className='highlight'>dynamic social media webpage</span> using 
                <span className='highlight'> MySQL</span>.
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
              <p>
              I have over <span className='highlight'>two years </span>
              of experience programming in <span className='highlight'>C++</span>
              , where I focused on
              <span className='highlight'> object-oriented programming </span>
              that implements various 
              <span className='highlight'>data structures</span> and
              <span className='highlight'> algorithms</span>. I use C++ for 
              many of my 
              <span className='highlight'>research</span> and 
              <span className='highlight'> academic projects</span> for its practicality.
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
              <p>Many of my projects are 
                <span className='highlight'> deployed on a webpage</span> and 
                rely on the 
                <span className='highlight'> webpage's functionality</span> to 
                process and display the data. I have plenty of experience developing 
                <span className='highlight'> static</span> and 
                <span className='highlight'> dynamic web pages</span> for various purposes.
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
              <p>I have used <span className='highlight'>MySQL database </span>
              for years to experiment with 
              <span className='highlight'> web development</span> and its
              <span className='highlight'> data</span>. Some projects 
              implementing SQL database include a 
              <span className='highlight'> registration website</span>, a 
              <span className='highlight'> browser-based game</span>, and a 
              <span className='highlight'> chat application</span>.
              </p>
          </div>
          <div className='skillbox'>
            <img
                alt="aws"
                src= '/icons/aws.jpg'
                width="110"
                height="110"
                style={{borderRadius: "50%", margin: '20px'}}
                color='blue'
                />
              <h4>AWS</h4>
              <p>I began exploring the 
              <span className='highlight'> AWS platform</span> and its 
              <span className='highlight'> services</span> to 
              <span className='highlight'> host projects</span> on the internet. 
              I gained familiarity with 
              <span className='highlight'> AWS Amplify</span> to host my 
              <span className='highlight'> frontend react applications</span>, 
              <span className='highlight'> EC2</span> to run a virtual machine as a 
              <span className='highlight'> webserver</span>, and 
              <span className='highlight'> RDS</span> to manage 
              <span className='highlight'> MySQL database</span> on the cloud.
              </p>
          </div>
        </div>
      </div>
  </React.Fragment>  
  );
}

export default Skills;