import React,{useState} from 'react';
import Modal from './modal';
import './projects.css';

function Projects() {
  const[show, setShow] = useState(0);

  return (
    <React.Fragment>

      <div id = 'projects' className='d-flex flex-column align-items-center' style={{minHeight: "100vh", backgroundColor:'#edeeef'}}>
        <div className='text-center' style={{height:'auto', marginTop:'100px'}}>
          <h1 style={{fontSize:'20px', fontWeight:'650', color:'#fcbc1d'}}>Portfolio</h1>
          <h1 style={{fontSize:'50px', fontWeight:'650'}}>Personal Projects</h1>
          <p style={{fontSize:'20px', fontWeight:'100'}}>Here you can see some of the projects I've done on my own time.</p>
        </div>
        <div className='d-flex flex-wrap text-center text-white justify-content-center my-4' style={{height:'auto', maxWidth:'1300px'}}>
          <div className='box' onClick={()=>setShow(1)} style={{cursor:'pointer', textShadow:'black 0px 0 15px', backgroundImage: "url(/projects/textnet.jpg)", backgroundSize: 'cover', backgroundRepeat: "no-repeat"}}>
            <div className='bgbox'>
              <h1 style={{paddingTop:'60px', color:'#fcbc1d', fontSize:'25px'}}>TextNet</h1>
              <p style={{color:'white', fontSize:'20px'}}>Chat Application hosted on AWS Amplify and its webserver on AWS EC2</p>
            </div>
          </div>
          <div className='box' onClick={()=>setShow(2)} style={{cursor:'pointer', textShadow:'black 1px 0 10px', backgroundImage: "url(/projects/Hitman.jpg)", backgroundSize: 'cover', backgroundRepeat: "no-repeat"}}>
            <div className='bgbox'>
              <h1 style={{paddingTop:'60px', color:'#fcbc1d', fontSize:'25px'}}>Hitman</h1>
              <p style={{color:'white', fontSize:'20px'}}>Registration Webpage that hosts a browser game built using a JS framework called Phaser3</p>
            </div>
          </div>
          <div className='box' onClick={()=>setShow(3)} style={{cursor:'pointer', textShadow:'black 1px 0 10px', backgroundImage: "url(/projects/imageGenerator.jpeg)", backgroundSize: 'cover', backgroundRepeat: "no-repeat"}}>
            <div className='bgbox'>
              <h1 style={{paddingTop:'60px', color:'#fcbc1d', fontSize:'25px'}}>Network Visualization</h1>
              <p style={{color:'white', fontSize:'20px'}}>Project description coming soon! and this is for some of the spacing</p>
            </div>
          </div>
          <div className='box' onClick={()=>setShow(4)} style={{cursor:'pointer', textShadow:'black 1px 0 10px', backgroundImage: "url(/projects/sentimentAnalysis.jpg)", backgroundSize: 'cover', backgroundRepeat: "no-repeat"}}>
            <div className='bgbox'>
              <h1 style={{paddingTop:'60px', color:'#fcbc1d', fontSize:'25px'}}>Sentiment Text Analysis</h1>
              <p style={{color:'white', fontSize:'20px'}}>Project description coming soon! and this is for some of the spacing</p>
            </div>
          </div>
          <div className='box' onClick={()=>setShow(5)} style={{cursor:'pointer', textShadow:'black 1px 0 10px', backgroundImage: "url(/projects/cnn.jpg)", backgroundSize: 'cover', backgroundRepeat: "no-repeat"}}>
            <div className='bgbox'>
              <h1 style={{paddingTop:'60px', color:'#fcbc1d', fontSize:'25px'}}>Convolutional Neural Network</h1>
              <p style={{color:'white', fontSize:'20px'}}>Building a convolutional neural network from scratch on Python using NumPy</p>
            </div>
          </div>
          <div className='box' onClick={()=>setShow(6)} style={{cursor:'pointer', textShadow:'black 1px 0 10px', backgroundImage: "url(/projects/MMNN.jpg)", backgroundSize: 'cover', backgroundRepeat: "no-repeat"}}>
            <div className='bgbox'>
              <h1 style={{paddingTop:'60px', color:'#fcbc1d', fontSize:'25px'}}>Multi-Layer Fully Connected Neural Network</h1>
              <p style={{color:'white', fontSize:'20px'}}>Project description coming soon! and this is for some of the spacing</p>
            </div>
          </div>
          <div className='box' onClick={()=>setShow(7)} style={{cursor:'pointer', textShadow:'black 1px 0 10px', backgroundImage: "url(/projects/twoLayer.jpg)", backgroundSize: 'cover', backgroundRepeat: "no-repeat"}}>
            <div className='bgbox'>
              <h1 style={{paddingTop:'60px', color:'#fcbc1d', fontSize:'25px'}}>Two Layer Neural Network</h1>
              <p style={{color:'white', fontSize:'20px'}}>Project description coming soon! and this is for some of the spacing</p>
            </div>
          </div>
          <div className='box' onClick={()=>setShow(8)} style={{cursor:'pointer', textShadow:'black 1px 0 10px', backgroundImage: "url(/projects/tournament.jpg)", backgroundSize: 'cover', backgroundRepeat: "no-repeat"}}>
            <div className='bgbox'>
              <h1 style={{paddingTop:'60px', color:'#fcbc1d', fontSize:'25px'}}>Object-Oriented League Tournament</h1>
              <p style={{color:'white', fontSize:'20px'}}>Project description coming soon! and this is for some of the spacing</p>
            </div>
          </div>
          <div className='box' onClick={()=>setShow(9)} style={{cursor:'pointer', textShadow:'black 1px 0 10px', backgroundImage: "url(/projects/libraryGUI.jpg)", backgroundSize: 'cover', backgroundRepeat: "no-repeat"}}>
            <div className='bgbox'>
              <h1 style={{paddingTop:'60px', color:'#fcbc1d', fontSize:'25px'}}>Library Checkout GUI</h1>
              <p style={{color:'white', fontSize:'20px'}}>Project description coming soon! and this is for some of the spacing</p>
            </div>
          </div>
          <div className='box' onClick={()=>setShow(10)} style={{cursor:'pointer', textShadow:'black 1px 0 10px', backgroundImage: "url(/projects/Converter.jpg)", backgroundSize: 'cover', backgroundRepeat: "no-repeat"}}>
            <div className='bgbox'>
              <h1 style={{paddingTop:'60px', color:'#fcbc1d', fontSize:'25px'}}>Binary-Text Converter</h1>
              <p style={{color:'white', fontSize:'20px'}}>Project description coming soon! and this is for some of the spacing</p>
            </div>
          </div>
        </div>
        <Modal onClose={()=>setShow(0)} show={show} />

        <div className='col text-center m-3'> 
          <h3>To see more of my projects...</h3>
          <a href='https://github.com/nakahatar111' target='_blank' rel="noreferrer">
            <button className='btn btn-primary px-4' style={{backgroundColor:'#3A3B3B'}}>Visit My Github
              <img
                alt="Github"
                src= '/icons/git.jpg'
                width="50"
                height="50"
              />
            </button>
          </a> 
        </div>
      </div>
    </React.Fragment>
  );
}

export default Projects;