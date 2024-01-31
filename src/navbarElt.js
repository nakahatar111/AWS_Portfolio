import React from 'react';

function NavElement(props) {
  var dict = {
    'ABOUT': '#about',
    'SKILLS': '#skills',
    'EXPERIENCES': '#timeline',
    'PROJECTS': '#projects',
    'PAPERS': '#papers',
    'CONTACT': '#contact'
  };

  return (
    <React.Fragment>
      <th>
        <div className='p-1'>
          <a href = {dict[props.label]} className='m-0' style={{color: 'white',fontSize:'14px', fontWeight:'300', fontFamily: 'Verdana, concourse, sweet sans', paddingRight: '10px', textDecoration:'none'}}>{props.label}</a>
          
        </div>
      </th>
    </React.Fragment>
  );
}

export default NavElement;