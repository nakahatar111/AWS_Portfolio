import React from 'react';

function Timeline() {
  return (<React.Fragment>
    <div id = 'timeline' className='d-flex flex-column align-items-center' style={{height: "100vh", backgroundColor:'gray'}}>
        <div className='border border-primary text-center' style={{height:'150px', marginTop:'100px'}}>
          <h1 style={{fontSize:'50px', fontWeight:'650'}}>Timeline</h1>
          <p style={{fontSize:'20px', fontWeight:'100'}}>A short summary of my work experience.</p>
        </div>
        <div className='row text-center' style={{height:'230px', width:'1000px'}}>
          <div className='border border-light col'>
            <h1 style={{paddingTop:'60px', color:'#fcbc1d', fontSize:'25px'}}>Machine Learning</h1>
            <p style={{color:'white', fontSize:'20px'}}>This is what it is</p>
          </div>
          <div className='border border-primary col-3'>
            <div>
            <img
              alt="Face"
              src= '/uber.png'
              width="170"
              height="170"
              border="6px solid #555"
              style={{borderRadius: "50%"}}
              color='blue'
              /></div>
              <div className='' style={{height:'60px', position:'absolute', borderLeft:'3px solid black', left:'50%'}}></div>
          </div>
          <div className='border border-secondary col'>
          </div>
        </div>
        <div className='row text-center' style={{height:'230px', width:'1000px'}}>
          <div className='border border-light col'>
            
          </div>
          <div className='border border-primary col-3'>
            <img
              alt="Face"
              src= '/BUJA.png'
              width="170"
              height="170"
              border="6px solid #555"
              style={{borderRadius: "50%"}}
              color='blue'
              />
              <div className='' style={{height:'60px', position:'absolute', borderLeft:'3px solid black', left:'50%'}}></div>
          </div>
          <div className='border border-secondary col'>
            <h1 style={{paddingTop:'60px', color:'#fcbc1d', fontSize:'25px'}}>Machine Learning</h1>
            <p style={{color:'white', fontSize:'20px'}}>This is what it is</p>
          </div>
        </div>
      </div>
  </React.Fragment>  
  );
}

export default Timeline;