import React, {useEffect, useState} from 'react';
import NavElement from './navbarElt';

function Navbar() {
  

  const [navStyle, setNavStyle] = useState(0);
  const labels = ["ABOUT", "SKILLS", "PROJECTS","TIMELINE","CONTACT"]
  
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
    transition: 'background-color 0.5s, padding 0.5s'
  };
  const style2 = {
    width: "100vw",
    backgroundColor: "#212529",  
    padding: "0px 0px 0px 0px",
    transition: 'background-color 0.5s, padding 0.5s'
  };

  const color1 = {/*text*/
    color:"#fcbc1d",
    fontSize:"20px",
    fontWeight: "700",
    padding: "10px 0px 0px 120px",
    fontFamily: "Montserrat",
    transition: 'font-size 0.5s, padding 0.5s'
  };

  const color2 = {
    color:"#fcbc1d",
    fontSize:"17px",
    fontWeight: "600",
    padding: "0px 0px 0px 120px",
    fontFamily: "Montserrat",
    transition: 'font-size 0.5s, padding 0.5s'
  };

  return (
    <React.Fragment>
      <div className='row' style={(navStyle === 0 && style1) || style2}>
        <div className='col-6'>
          <h3 className='mt-2' style={((navStyle === 0 && color1) || color2)}>Ryuma Nakahata</h3>
        </div>
        <div className='col-6 d-flex align-items-center' style={(navStyle === 0 && color1) || color2}>
          <table>
          <tbody>
          <tr>
            {labels.map(label => (
              <NavElement label = {label} key = {label}/>
            ))}
            <th>
              <div className='p-1'>
                <a href = '/resume.pdf' target="_blank" className='m-0 text-white' style={{textDecoration:'none', fontSize:'12px', fontWeight:'100', fontFamily: 'Montserrat', paddingRight: '10px', background: 'none', border: 'none'}}>RESUME</a>
              </div>
            </th>
          </tr>
          </tbody>
          </table>
        </div>
        
      </div>
    </React.Fragment>
  );
}
export default Navbar;