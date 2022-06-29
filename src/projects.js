import React from 'react'; 
import './projects.css';
function Projects() {

  return (
    <React.Fragment>
      <div id = 'projects' className='d-flex flex-column align-items-center' style={{minHeight: "100vh", backgroundColor:'#edeeef'}}>
        <div className='text-center' style={{height:'150px', marginTop:'100px'}}>
          <h1 style={{fontSize:'20px', fontWeight:'650', color:'#fcbc1d'}}>Portfolio</h1>
          <h1 style={{fontSize:'50px', fontWeight:'650'}}>Personal Projects</h1>
          <p style={{fontSize:'20px', fontWeight:'100'}}>Here you can see some of the projects I've done on my own time.</p>
        </div>
        <div className='d-flex flex-wrap text-center text-white justify-content-center my-5' style={{height:'auto', maxWidth:'1300px'}}>
          <div className='box' style={{textShadow:'black 0px 0 15px', backgroundImage: "url(/projects/textnet.jpg)", backgroundSize: 'cover', backgroundRepeat: "no-repeat"}}>
            <div className='bgbox'>
              <h1 style={{paddingTop:'60px', color:'#fcbc1d', fontSize:'25px'}}>TextNet</h1>
              <p style={{color:'white', fontSize:'20px'}}>This is what it is</p>
            </div>
          </div>
          <div className='box' style={{textShadow:'black 1px 0 10px', backgroundImage: "url(/nyc.jpg)", backgroundSize: 'cover', backgroundRepeat: "no-repeat"}}>
            <div className='bgbox'>
              <h1 style={{paddingTop:'60px', color:'#fcbc1d', fontSize:'25px'}}>Hitman</h1>
              <p style={{color:'white', fontSize:'20px'}}>This is what it is</p>
            </div>
          </div>
          <div className='box' style={{textShadow:'black 1px 0 10px', backgroundImage: "url(/projects/imageGenerator.jpeg)", backgroundSize: 'cover', backgroundRepeat: "no-repeat"}}>
            <div className='bgbox'>
              <h1 style={{paddingTop:'60px', color:'#fcbc1d', fontSize:'25px'}}>Network Visualization</h1>
              <p style={{color:'white', fontSize:'20px'}}>This is what it is</p>
            </div>
          </div>
          <div className='box' style={{textShadow:'black 1px 0 10px', backgroundImage: "url(/projects/sentimentAnalysis.png)", backgroundSize: 'cover', backgroundRepeat: "no-repeat"}}>
            <div className='bgbox'>
              <h1 style={{paddingTop:'60px', color:'#fcbc1d', fontSize:'25px'}}>Sentiment Text Analysis</h1>
              <p style={{color:'white', fontSize:'20px'}}>This is what it is</p>
            </div>
          </div>
          <div className='box' style={{textShadow:'black 1px 0 10px', backgroundImage: "url(/projects/cnn.jpg)", backgroundSize: 'cover', backgroundRepeat: "no-repeat"}}>
            <div className='bgbox'>
              <h1 style={{paddingTop:'60px', color:'#fcbc1d', fontSize:'25px'}}>Convolutional Neural Network</h1>
              <p style={{color:'white', fontSize:'20px'}}>This is what it is</p>
            </div>
          </div>
          <div className='box' style={{textShadow:'black 1px 0 10px', backgroundImage: "url(/projects/MMNN.png)", backgroundSize: 'cover', backgroundRepeat: "no-repeat"}}>
            <div className='bgbox'>
              <h1 style={{paddingTop:'60px', color:'#fcbc1d', fontSize:'25px'}}>Multi-Layer Fully Connected Neural Network</h1>
              <p style={{color:'white', fontSize:'20px'}}>This is what it is</p>
            </div>
          </div>
          <div className='box' style={{textShadow:'black 1px 0 10px', backgroundImage: "url(/projects/twoLayer.png)", backgroundSize: 'cover', backgroundRepeat: "no-repeat"}}>
            <div className='bgbox'>
              <h1 style={{paddingTop:'60px', color:'#fcbc1d', fontSize:'25px'}}>Two Layer Neural Network</h1>
              <p style={{color:'white', fontSize:'20px'}}>This is what it is</p>
            </div>
          </div>
          <div className='box' style={{textShadow:'black 1px 0 10px', backgroundImage: "url(/projects/tournament.jpg)", backgroundSize: 'cover', backgroundRepeat: "no-repeat"}}>
            <div className='bgbox'>
              <h1 style={{paddingTop:'60px', color:'#fcbc1d', fontSize:'25px'}}>Object-Oriented League Tournament</h1>
              <p style={{color:'white', fontSize:'20px'}}>This is what it is</p>
            </div>
          </div>
          <div className='box' style={{textShadow:'black 1px 0 10px', backgroundImage: "url(/projects/libraryGUI.jpg)", backgroundSize: 'cover', backgroundRepeat: "no-repeat"}}>
            <div className='bgbox'>
              <h1 style={{paddingTop:'60px', color:'#fcbc1d', fontSize:'25px'}}>Library Checkout GUI</h1>
              <p style={{color:'white', fontSize:'20px'}}>This is what it is</p>
            </div>
          </div>
          <div className='box' style={{textShadow:'black 1px 0 10px', backgroundImage: "url(/projects/Converter.jpg)", backgroundSize: 'cover', backgroundRepeat: "no-repeat"}}>
            <div className='bgbox'>
              <h1 style={{paddingTop:'60px', color:'#fcbc1d', fontSize:'25px'}}>Binary-Text Converter</h1>
              <p style={{color:'white', fontSize:'20px'}}>This is what it is</p>
            </div>
          </div>
        </div>
        <div>
          <a href='https://github.com/nakahatar111' target='_blank' rel="noreferrer">
              <div className='px-3' style={{backgroundColor:'#3A3B3B'}}>
              Visit My Github
              <img
                  alt="Github"
                  src= '/icons/git.jpg'
                  width="70"
                  height="70"
                />
              </div>
            </a>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Projects;