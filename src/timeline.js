import React from 'react';

const Timeline = ({ experiences }) => {
  return (
    <div id = 'timeline' className='pb-5 d-flex flex-column align-items-center' style={{backgroundColor:'#edeeef'}}>
        <div className='text-center' style={{height:'150px', marginTop:'80px'}}>
          <h1 style={{fontSize:'50px', fontWeight:'650'}}>Timeline</h1>
          <p style={{fontSize:'20px', fontWeight:'100'}}>A short summary of my work experience...</p>
        </div>
      {experiences.map((exp, index) => (
        <div key={index} className='d-flex flex-column align-items-center position-relative' style={{minHeight:'230px', maxWidth:'1300px'}}>
          <div className='d-flex' style={{ width: '100%' }}>
            <div className='col'>
              {(index % 2===0) && (<div style={{ textAlign: 'right' }}>
                
                <h1 style={{color:'#daa520', fontSize:'25px', fontWeight:'bold'}}>{exp.title}</h1>
                <h4><b>{exp.company}</b>, {exp.location}</h4>
                {((exp.dateRange).length > 0) ? ( <p>{exp.dateRange}</p>) : (<p>{exp.startDate} - {exp.endDate}</p>)}
                <p style={{color:' #696969', fontSize:'20px', fontWeight:'100'}}>{exp.description}</p>

              </div>)}
            </div>
            <div className='d-flex flex-column col-1' style={{minWidth:'120px'}}>
              <div className='text-center'>
              <img
                alt={exp.company}
                src= {exp.src}
                width="90%"
                height="auto"
                style={{ borderRadius: "50%", border: "6px solid #9EA4AC", zIndex: 2, position: 'relative', top:'-3px', backgroundColor: '#FFFFFF'}}
                />
                </div>
            </div>
            <div className='col'>
              {(index % 2===1) && (<div style={{ textAlign: 'left' }}>
                <h1 style={{color:'#daa520', fontSize:'25px', fontWeight:'bold'}}>{exp.title}</h1>
                <h4><b>{exp.company}</b>, {exp.location}</h4>
                {((exp.dateRange).length > 0) ? ( <p>{exp.dateRange}</p>) : (<p>{exp.startDate} - {exp.endDate}</p>)}
                <p style={{color:' #696969', fontSize:'20px', fontWeight:'100'}}>{exp.description}</p>
              </div>)}
            </div>
            <div className='position-absolute' style={{ zIndex: 1, top: 0, bottom: 0, width: '3px', backgroundColor: '#B0B7C0', left: '50%' }}></div>

          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;