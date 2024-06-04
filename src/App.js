import Navbar from './navbar';
import About from './about';
import Skills from './skills';
import Projects from './projects';
import Contact from './contact';
import React from 'react';
import Timeline from './timeline';

function App() {
  const experiences = [
    {
      src:'./company_logo/sunyRF.jpg',
      title: 'Machine Learning Research Assistant',
      company: 'The Research Foundation for SUNY',
      location: 'Binghamton, NY',
      startDate: '2022',
      endDate: 'Present',
      dateRange: '',
      description: 'My research focuses on the application of modern deep learning on Ptychography, a lensless microscopic imaging technique. I developed PtychoFormer, a transformer-based model, to improve the atomic-scale image reconstruction from a series of low-resolution diffraction patterns of samples. The deep learning model surpasses the current state-of-the-art models for ptychography by employing a more powerful model and enhanced processing technique. I am currently in the process of publishing the paper',
    },
    {
      src:'./company_logo/AllYours.jpg',
      title: 'Web Engineer',
      company: 'All Yours Coaching',
      location: 'New York, NY',
      startDate: '2022',
      endDate: 'Present',
      dateRange: '',
      description: 'I worked at All Yours Coaching as a Web Developer Intern in the Product Team and transfered into remote part-time position. My team mainly develop and maintain technologies of the front-end and back-end pipeline of the company website. This includes overseeing product and customer databases and prototyping, demonstrating, and deploying new technologies. My team revamped the website interface through webpage analytics, feedback reports, and with close teamwork, leading to a 20% improvement in KPI metrics and an 8% increase in customer retention, addressing previously identified user experience issues.',
    },
    {
      src:'./binghamton.png',
      title: 'Teaching Assistant for CS210: Programming with Objects & Data',
      company: 'Binghamton University',
      location: 'Binghamton, NY',
      startDate: '',
      endDate: '',
      dateRange: 'Spring 2024',
      description: 'I currently work as a Teaching Assistant for a undergraduate computer science course at Binghamton Univerity for Spring 2024. I supervise 40 students for hands-on instructional laboratory for a course that teaches materials in object-oriented programming using Java. I also assist and evaluate student tasks, such as laboratory work, homework, quizzes, and exams.',
    },
    {
      src:'./binghamton.png',
      title: 'Teaching Assistant for CS220: Programming with Objects & Data',
      company: 'Binghamton University',
      location: 'Binghamton, NY',
      startDate: '',
      endDate: '',
      dateRange: 'Fall 2023',
      description: 'I administered instructional laboratory for 39 undergraduate students at Binghamton Univerity for Fall 2023. The course was designed to cement the concepts of computer architecture, data representation, and computer organization using C and Assembly.',
    },
  ];
  
  return (<React.Fragment>
    <header className="App-header position-fixed justify-content-center" style={{zIndex:10}} >
        <Navbar/>
    </header>
    <div className="App" style={{fontFamily:'Helvetica'}}> 
      
      <div id='home' className='d-flex align-items-center text-center justify-content-center align-content-center align-items-center' 
      style={{minHeight: "100vh", backgroundImage: "url(/nyc.jpg)", minWidth:'60px',backgroundSize:'cover', backgroundPositionY: "0px"}}>
        <div style={{textShadow:'black 1px 0 10px', paddingTop:'70px', paddingBottom:'70px'}}>
          <img
            alt="Face"
            src= '/me.JPG'
            width="230"
            height="230"
            border="6px solid"
            style={{borderRadius: "50%"}}
            className="d-inline-block align-top"
            />
          <h1 style={{color: '#F7F7F7',fontFamily:'', fontWeight:'700', fontSize:'50px'}}>Ryuma Nakahata</h1>
          <h3 className='text-white m-3 pb-3 fst-italic' style={{fontWeight:'700'}}>New Grad from Binghamton University - AI/ML Researcher</h3>
          <a href='#about' className='px-5 py-3' style={{fontWeight:'700',backgroundColor: "whitesmoke", borderRadius: '7px', textDecoration: 'none', color: 'black', textShadow:'none',boxShadow: "0px 0px 4px black"}}>Enter Portfolio</a>
        </div>
      </div>
      <About/>
      <Skills/>
      <Timeline experiences={experiences}/>
      <Projects/>
      <Contact/>

    </div>
    </React.Fragment>
  );
}

export default App;
