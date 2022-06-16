import React from 'react';

function Contact() {
  return (<React.Fragment>
   <div id = 'contact' className='d-flex flex-column align-items-center' style={{height: "100vh", backgroundColor:'white'}}>
      <div style={{minHeight:'85vh', width:'100%', backgroundColor:'gray', backgroundPosition: 'center', backgroundImage: "url(/map.png)", backgroundSize: 'fit', backgroundRepeat: "no-repeat"}}>
        <div className='text-center text-white' style={{height:'150px', marginTop:'100px',textShadow:'black 1px 0 10px'}}>
          <h1 style={{fontSize:'40px', fontWeight:'650'}}>Contact Me</h1>
          <div style={{fontSize:'23px', fontWeight:'600'}}>
            <span>Email: </span>
            <a style={{color:'#fcbc1d', textDecoration:'none',fontWeight:'300'}} href='mailto:rnakaha2@binghamton.edu'>rnakaha2@binghamton.edu</a> || <a style={{color:'#fcbc1d', textDecoration:'none',fontWeight:'300'}} href='mailto:nakahataryuma@gmail.com'>nakahataryuma@gmail.com</a>
            <br/>
            <span>Phone: </span> <a style={{color:'#fcbc1d',textDecoration:'none',fontWeight:'300'}} href='tel:646-705-7822'>(646)705-7822</a>
          </div>
        </div>
        <form className='d-flex justify-content-center' style={{minHeight:'50%'}}>
          <div className='row' style={{width:'80%'}}>
            <div className='col-md-6'>
              <div className='input-group my-4'>
                <input className='form-control p-3' type='text' placeholder='Your Name *'></input>
              </div>
              <div className='input-group my-4'>
                <input className='form-control p-3' type='text' placeholder='Your Email *'></input>
              </div>
              <div className='input-group my-4'>
                <input className='form-control p-3' type='text' placeholder='Your Phone *'></input>
              </div>
            </div>
            <div className='col-md-6'>
              <textarea style={{height:'80%', resize:'none'}} className='form-control  my-4' placeholder='Your Message'></textarea>
            </div>
            <div className='col text-center'>
                <button className='btn btn-primary px-4 py-3'>Send Message</button>           
            </div>
          </div>
        </form>
        </div>
        <div className='row text-center align-items-center' style={{width:'100%', height:'100%', position:'relative'}}>
          <div className='col-4'>
            <h5 style={{fontSize:'17px'}}>Copyright © Ryuma Nakahata 2022</h5>
          </div>
          <div className='col-4 d-flex justify-content-center'>
            <a href='facebook.com'>
              <div className='px-3'>
                <img
                  alt="Facebook"
                  src= '/BUJA.png'
                  width="70"
                  height="70"
                  style={{borderRadius: "50%"}}
                />
              </div>
            </a>
            <a href='github.com'>
              <div className='px-3'>
              <img
                  alt="Github"
                  src= '/BUJA.png'
                  width="70"
                  height="70"
                  style={{borderRadius: "50%"}}
                />
              </div>
            </a>
            <a href='linkedin.com'>
            <div className='px-3'>
              <img
                  alt="Linkedin"
                  src= '/BUJA.png'
                  width="70"
                  height="70"
                  style={{borderRadius: "50%"}}
                />
            </div>
            </a>
          </div>
          <div className='col-4'>
          </div>
        </div>
        
      </div>
  </React.Fragment>
  );
}

export default Contact;