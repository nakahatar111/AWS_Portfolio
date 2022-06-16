import React from 'react'; 
import './projects.css';
function Projects() {

  return (
    <React.Fragment>
      <div id = 'projects' className='d-flex flex-column align-items-center' style={{height: "100vh", backgroundColor:'#edeeef'}}>
        <div className='border border-primary text-center' style={{height:'150px', marginTop:'100px'}}>
          <h1 style={{fontSize:'20px', fontWeight:'650', color:'#fcbc1d'}}>Portfolio</h1>
          <h1 style={{fontSize:'50px', fontWeight:'650'}}>Personal Projects</h1>
          <p style={{fontSize:'20px', fontWeight:'100'}}>Here you can see some of the projects I've done on my own time.</p>
        </div>
        <div className='row text-center' style={{height:'230px', width:'1000px'}}>
          <div className='box col-sm' style={{textShadow:'black 1px 0 10px', backgroundImage: "url(/nyc.jpg)", backgroundSize: 'cover', backgroundRepeat: "no-repeat"}}>
            <h1 style={{paddingTop:'60px', color:'#fcbc1d', fontSize:'25px'}}>Machine Learning</h1>
            <p style={{color:'white', fontSize:'20px'}}>This is what it is</p>
          </div>
          <div className='box col-sm'>Java</div>
          <div className='box col-sm'>High Performance Computing</div>
        </div>
        <div className='row text-center' style={{height:'230px', width:'1000px'}}>
          <div className='box col-sm' style={{textShadow:'black 1px 0 10px', backgroundImage: "url(/nyc.jpg)", backgroundSize: 'cover', backgroundRepeat: "no-repeat"}}>
            <h1 style={{paddingTop:'60px', color:'#fcbc1d', fontSize:'25px'}}>Machine Learning</h1>
            <p style={{color:'white', fontSize:'20px'}}>This is what it is</p>
          </div>
          <div className='box col-sm'>Java</div>
          <div className='box col-sm'>High Performance Computing</div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Projects;