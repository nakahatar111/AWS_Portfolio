import React,{useState} from 'react';

function Contact() {
  const[name,setName] = useState('');
  const[email,setEmail] = useState('');
  const[phone,setPhone] = useState('');
  const[message,setMessage] = useState('');

  const handleMessage = (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();
  
    // Debugging line: you should see this in your console when you click the button
    console.log('The button was clicked.');
  
    if (name && email && phone && message) {
      // Debugging line: check if the condition passes
      console.log('All fields are filled.');
  
      const mailtoLink = `mailto:nakahataryuma@gmail.com?subject=Portfolio Message from ${encodeURIComponent(name)}&body=Name: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0APhone: ${encodeURIComponent(phone)}%0AMessage: ${encodeURIComponent(message)}`;
      console.log(mailtoLink);
      
      window.open(mailtoLink, "_self");
    } else {
      // Debugging line: if this runs, one of the fields is empty
      console.log('Please fill all the fields.');
      alert('Please fill all the fields.');
    }
  };

  return (<React.Fragment>
   <div id = 'contact' className='d-flex flex-column align-items-center' style={{minHeight: "80vh", backgroundColor:'white'}}>
      <div style={{minHeight:'85vh', width:'100%', backgroundColor:'gray', backgroundPosition: 'center', backgroundImage: "url(/map.png)", backgroundSize: 'fit', backgroundRepeat: "no-repeat"}}>
        <div className='text-center text-white' style={{height:'150px', marginTop:'100px',textShadow:'black 1px 0 10px'}}>
          <h1 style={{fontSize:'40px', fontWeight:'650'}}>Contact Me</h1>
          <div style={{fontSize:'21px', fontWeight:'600'}}>
            <span>Email: </span>
            <a style={{color:'#fcbc1d', textDecoration:'none',fontWeight:'300'}} href='mailto:rnakaha2@binghamton.edu'>rnakaha2@binghamton.edu</a> || <a style={{color:'#fcbc1d', textDecoration:'none',fontWeight:'300'}} href='mailto:nakahataryuma@gmail.com'>nakahataryuma@gmail.com</a>
            <br/>
            <span>Phone: </span> <a style={{color:'#fcbc1d',textDecoration:'none',fontWeight:'300'}} href='tel:646-705-7822'>(646)705-7822</a>
          </div>
        </div>
        <form className='d-flex justify-content-center' style={{minHeight:'50%'}}>
          <div className='row' style={{width:'80%'}}>
            <div className='col-md-6'>
              <div className='my-4'>
                <input className='form-control p-3' onChange={e => {setName(e.target.value)}} type='text' placeholder='Your Name *'></input>
              </div>
              <div className=' my-4'>
                <input className='form-control p-3' onChange={e => {setEmail(e.target.value)}} type='text' placeholder='Your Email *'></input>
              </div>
              <div className=' my-4'>
                <input className='form-control p-3' onChange={e => {setPhone(e.target.value)}} type='text' placeholder='Your Phone *'></input>
              </div>
            </div>
            <div className='col-md-6'>
              <textarea style={{height:'80%', resize:'none'}}  onChange={e => {setMessage(e.target.value)}} className='form-control  my-4 p-3' placeholder='Your Message *'></textarea>
            </div>
            <div className='col text-center m-3'>
                <button className='btn btn-primary px-4 py-3' onClick={(e) => handleMessage(e)}>Send Message</button>
            </div>
          </div>
        </form>
        </div>
        <div className='row text-center align-items-center' style={{width:'100%', height:'80px'}}>
          <div className='col-4 px-3' style={{minWidth:'140px'}}>
            <h5 style={{fontSize:'17px'}}>Copyright © Ryuma Nakahata 2022</h5>
          </div>
          <div className='col-4 d-flex justify-content-center my-3'>
            <a href='https://www.facebook.com/profile.php?id=100010302573783' target='_blank' rel="noreferrer" >
              <div className='px-2'>
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
              <div className='px-2'>
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
            <div className='px-2'>
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
          <div className='col-4'>
          </div>
        </div>
        
      </div>
  </React.Fragment>
  );
}

export default Contact;