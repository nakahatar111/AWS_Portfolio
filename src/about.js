import React from 'react';

function About() {
  const B = (props) => <span style={{fontWeight: '600'}}>{props.children}</span>
  return (
  <React.Fragment>
    <div id= 'about' className='my-2 d-flex justify-content-evenly align-items-center flex-wrap'>
      <a href='https://www.binghamton.edu/'>
        <img
          alt=""
          src= "/binghamton.png"
          width="100"
          height="100"
          className="mx-2 d-inline-block align-top "
        />
      </a>
      <a href='https://supa.syr.edu/'>
        <img
          alt=""
          src= "/syracuse.jpg"
          width="100"
          height="100"
          className="mx-2 d-inline-block align-top"
        />
      </a>
      <a href='https://www.facebook.com/profile.php?id=100074095100831'>
        <img
          alt=""
          src= "/BUJA.png"
          width="100"
          height="100"
          className="mx-2 d-inline-block align-top"
        />
      </a>
      <a href='https://www.harrisoncsd.org/'>
        <img
          alt=""
          src= "/harrison.jpg"
          width="100"
          height="100"
          className="mx-2 d-inline-block align-top"
        />
      </a>
    </div>
    <div className='p-5 d-flex justify-content-center align-items-center' style={{minHeight: "90vh", backgroundColor: "#edeeef"}}>
      <div className='row justify-content-center align-items-center d-flex'>
        <div className='flex-column justify-content-center align-items-center d-flex' style={{maxWidth:'320px', maxHeight:'800px'}}>
            <img
              alt="Face"
              src= '/me.JPG'
              border="6px solid"
              style={{borderRadius: "50%", maxWidth:'100%', height:'auto'}}
              className="d-inline-block align-top"
              />
            <div className='d-flex justify-content-center my-3'>
            <a href='https://www.facebook.com/profile.php?id=100010302573783' target='_blank' rel="noreferrer">
              <div className='px-1'>
                <img
                  alt="Facebook"
                  src= '/icons/facebook.jpg'
                  width="50"
                  height="50"
                  style={{borderRadius: "50%"}}
                />
              </div>
            </a>
            <a href='https://github.com/nakahatar111' target='_blank' rel="noreferrer">
              <div className='px-1'>
              <img
                  alt="Github"
                  src= '/icons/git.jpg'
                  width="50"
                  height="50"
                  style={{borderRadius: "50%"}}
                />
              </div>
            </a>
            <a href='https://www.linkedin.com/in/ryuma521/' target='_blank' rel="noreferrer">
            <div className='px-1'>
              <img
                  alt="Linkedin"
                  src= '/icons/linkedin.jpg'
                  width="50"
                  height="50"
                  style={{borderRadius: "50%"}}
                />
            </div>
            </a>
          </div>
        </div>
        <div style={{fontFamily:'Trebuchet MS', maxWidth:'700px'}}>
          <p style={{fontWeight:'550', fontSize:'26px', margin:'0px'}}>Ryuma Nakahata</p>
          <p style={{fontWeight:'550', fontSize:'20px', marginBottom:'2px'}}>Binghamton '24, ML Research Assistant, Aspiring Software Engineer</p>
          <p style={{fontWeight:'lighter', fontSize:'16px', marginBottom:'4px'}}>
            I'm a graduate at Binghamton University, Class of 2024, 
            and I have a strong passion for Computer Science and Mathematics.
          </p>
          <p style={{fontWeight:'lighter', fontSize:'16px'}}>
            My interest includes calculus, combinatorics, web development, 
            natural processing language, high-performance computing, and generative 
            deep learning.
          </p>
          <h4 className='pt-2 mb-1' style={{fontSize: '24px', fontWeight:'bolder'}}>Binghamton University,</h4>
          <h5 style={{fontSize:'19px',fontWeight:'bolder', marginBottom:'2px'}}>Thomas J. Watson College of Engineering and Applied Science</h5>
          <ul style={{fontSize: '17px', fontWeight:'lighter'}}>
            <li style={{fontWeight:'bold'}}>Master of Science in Computer Science with Artificial Intelligence Track</li>
            <p style={{fontSize: '14px'}}>May 2023 - May 2024</p>
            <li style={{fontWeight:'bold'}}>Bachelor of Art in Mathematical Science, Minor in Computer Science</li>
            <p style={{fontSize: '14px', marginBottom:'0px'}}>August 2020 - May 2023</p>
              <p style={{fontSize:'15px', marginBottom:'0px'}}><B>GPA:</B> 3.92/4.00 <br/><B>Dean's List:</B> Fall 2020 - Spring 2023 <br/><B>Honors:</B></p>
              <p style={{fontSize:'15px', marginLeft:'6px'}}>- Summa Cum Laude<br/>- Pi Mu Epsilon Honorary Mathematics Society<br/>- Upsilon Pi 
              Epsilon Honor Society for Computing and Information Disciplines
              <br/>- Phi Beta Kappa Academic Honor Society</p>
          </ul>
        </div>

        <div className='row text-center' style={{paddingTop:'10px'}}>
          <h1>Learn more about my:</h1>
          <div className='d-flex flex-wrap justify-content-center my-4'>
            <a href='#skills' className='px-5 py-3 m-2' style={{fontWeight:'600', backgroundColor: "whitesmoke", borderRadius: '3px', textDecoration: 'none', color: 'black', boxShadow: "0px 0px 4px black"}}>Skills</a>
            <a href='#projects' className='px-5 py-3 m-2' style={{fontWeight:'600',backgroundColor: "whitesmoke", borderRadius: '3px', textDecoration: 'none', color: 'black', boxShadow: "0px 0px 4px black"}}>Projects</a>
            <a href = 'https://drive.google.com/file/d/1PXZmC8r-leZ8wUbZWoJgYNKqmT09k_MJ/view?usp=sharing' target="_blank" rel="noreferrer" className='px-5 py-3 m-2' style={{fontWeight:'600',backgroundColor: "whitesmoke", borderRadius: '3px', textDecoration: 'none', color: 'black', boxShadow: "0px 0px 4px black"}}>Resume</a>
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>  
  );
}

export default About;