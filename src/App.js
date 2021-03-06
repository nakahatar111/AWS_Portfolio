import Navbar from './navbar';
import About from './about';
import Skills from './skills';
import Projects from './projects';
import Contact from './contact';

function App() {

  return (
    <div className="App" style={{fontFamily:'Helvetica'}}> 
      <header className="App-header position-fixed justify-content-center" >
        <Navbar/>
      </header>
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
          <h3 className='text-white m-3 pb-3 fst-italic' style={{fontWeight:'700'}}>Undergraduate Student at Binghamton University</h3>
          <a href='#about' className='px-5 py-3' style={{backgroundColor: "whitesmoke", borderRadius: '7px', textDecoration: 'none', color: 'black', textShadow:'none',boxShadow: "0px 0px 4px black"}}>Enter Portfolio</a>
        </div>
      </div>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>

    </div>
  );
}
/*
<About/>
<Skills/>
<Projects/>
<Timeline/>
<Contact/>
*/
export default App;
