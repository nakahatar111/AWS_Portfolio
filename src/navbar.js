import React, {useEffect, useState} from 'react';
import NavElement from './navbarElt';
import './navbar.css';

function Navbar() {
  
  const [navStyle, setNavStyle] = useState(0);
  const [navMenu, setNavMenu] = useState(false);

  const labels = ["ABOUT", "SKILLS","EXPERIENCES", "PROJECTS","CONTACT"]
  
  const onScroll = () => {
    setNavStyle(window.scrollY);
  }

    
  useEffect(()=>{
    window.addEventListener('scroll', onScroll);
  },[navStyle])

  const style1 = {/*div*/
    width: "100vw",
    backgroundColor: "transparent",
    padding: "0px 0px 0px 0px",
    transition: 'background-color 0.5s, padding 0.5s',
    minWidth: "390px",
  };

  const style2 = {
    width: "100vw",
    backgroundColor: "#212529",  
    padding: "0px 0px 0px 0px",
    transition: 'background-color 0.5s, padding 0.5s',
    minWidth: "390px",
  };

  const color1 = {/*text*/
    color:"#fcbc1d",
    fontSize:"24px",
    fontWeight: "500",
    padding: "10px 0px 0px 25px",
    fontFamily: "Verdana, concourse, sweet sans",
    transition: 'font-size 0.5s, padding 0.5s',
  };

  const color2 = {
    color:"#fcbc1d",
    fontSize:"20px",
    fontWeight: "550",
    padding: "3px 0px 0px 25px",
    fontFamily: "Verdana, concourse, sweet sans",
    transition: 'font-size 0.5s, padding 0.5s'
  };

  return (
    <React.Fragment>
      <div className='navBar row' style={((navStyle === 0 && navMenu === false) && style1) || style2}>
        <div className='col-5' style={{minWidth:'270px'}}>
          <a href = '#home' style={{textDecoration:'none'}}>
          <h3 className='mt-2 mb-3' style={(((navStyle === 0 && navMenu === false) && color1) || color2)}>Ryuma Nakahata</h3>
          </a>
        </div>
        <div className='col-3 col-sm-6 d-flex justify-content-end' style={((navStyle === 0 && navMenu === false) && color1) || color2}>
          <button className='navMenu' onClick={()=>navMenu ? setNavMenu(false) : setNavMenu(true)}>Menu &equiv;</button>
          <table>
          <tbody className='navElt'>
          <tr>
            {labels.map(label => (
              <NavElement label = {label} key = {label}/>
            ))}
            <th>
              <div className='p-1'>
                <a href = 'https://drive.google.com/file/d/199bXZBSUzrJoZihgZhrs5nL3mnF9YlGm/view?usp=sharing' target="_blank" rel="noreferrer" className='m-0 text-white' style={{textDecoration:'none', fontSize:'14px', fontWeight:'100', fontFamily: 'Verdana, concourse, sweet sans', paddingRight: '10px', background: 'none', border: 'none'}}>RESUME</a>
              </div>
            </th>
            <th>
              <div className='p-1'>
                <a href = 'https://drive.google.com/file/d/1RBfTLj4Qa2Hnuf8JtQeBjvqp9nqhzfZI/view?usp=sharing' target="_blank" rel="noreferrer" className='m-0 text-white' style={{textDecoration:'none', fontSize:'14px', fontWeight:'100', fontFamily: 'Verdana, concourse, sweet sans', paddingRight: '10px', background: 'none', border: 'none'}}>THESIS</a>
              </div>
            </th>
          </tr>
          </tbody>
          </table>
        </div>
        {navMenu && <div className='d-flex row m-0 pb-3' style={{paddingLeft:'25px'}}>
          <div className='dropdown'>
            <a href='#about' onClick={()=>setNavMenu(false)}>ABOUT</a>
          </div>
          <div className='dropdown'>
            <a href='#skills' onClick={()=>setNavMenu(false)}>SKILLS</a>
          </div>
          <div className='dropdown'>
            <a href='#timeline' onClick={()=>setNavMenu(false)}>EXPERIENCES</a>
          </div>
          <div className='dropdown'>
            <a href='#projects' onClick={()=>setNavMenu(false)}>PROJECTS</a>
          </div>
          <div className='dropdown'>
            <a href='#contact' onClick={()=>setNavMenu(false)}>CONTACT</a>
          </div>
          <div className='dropdown'>
            <a href='#contact' onClick={()=>setNavMenu(false)}>RESUME</a>
          </div>
        </div>}
      </div>
    </React.Fragment>
  );
}
export default Navbar;