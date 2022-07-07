import React from "react";
import './modal.css';

function Modal(props) {
  if(!props.show){
    return null
  }

  return (
    <React.Fragment>

      <div className="modals-container border border-secondary">
        {props.show ===1 && <div className="modals-content">
          <div className="modals-header">
            <h2><a href='https://www.mytextnet.com/' target={'_blank'} rel="noreferrer">TextNet</a> - Chat Application</h2>
          </div>
          <div className="modals-body">
            <p style={{fontWeight:'lighter', fontSize:'20px'}}>Chat Application hosted on AWS Amplify and its webserver on AWS EC2.
            Developed group and one-to-one chat application with client-server architecture using React JS, Node JS, Express, and SQL database. The program asynchronously fetches JSON data from the server to be displayed on the user UI.
            Registered users can access prior conversations, create and delete chats, and execute real-time communication with other users. The program features notification systems, appropriate time stamps, and message delivery statuses.
            </p>
            <div>
              <p style={{fontSize:'17px', marginBlock:'0px'}}>View this project on GitHub:</p>
              <a style={{fontSize:'15px', color:'#fcbc1d'}} href='https://github.com/nakahatar111/AWS_react_chat' target={'_blank'} rel="noreferrer">GitHub Link</a>
            </div>
          </div>
          <div className="modals-footer">
            <button className='btn btn-secondary mt-3' onClick={props.onClose}><span>&times;</span> Close Project</button>
          </div>
        </div>}

        {props.show ===2 && <div className="modals-content">
          <div className="modals-header">
            <h2>Hitman - Browser Game</h2>
          </div>
          <div className="modals-body">
            Project description coming soon!
          </div>
          <div className="modals-footer">
            <button className='btn btn-secondary mt-3' onClick={props.onClose}><span>&times;</span> Close Project</button>
          </div>
        </div>}

        {props.show ===3 && <div className="modals-content">
          <div className="modals-header">
            <h2>Network Visualization</h2>
          </div>
          <div className="modals-body">
            Project description coming soon!
          </div>
          <div className="modals-footer">
            <button className='btn btn-secondary mt-3' onClick={props.onClose}><span>&times;</span> Close Project</button>
          </div>
        </div>}

        {props.show ===4 && <div className="modals-content">
          <div className="modals-header">
            <h2>Sentiment Text Analysis</h2>
          </div>
          <div className="modals-body">
            Project description coming soon!
          </div>
          <div className="modals-footer">
            <button className='btn btn-secondary mt-3' onClick={props.onClose}><span>&times;</span> Close Project</button>
          </div>
        </div>}

        {props.show ===5 && <div className="modals-content">
          <div className="modals-header">
            <h2>Convolutional Neural Network</h2>
          </div>
          <div className="modals-body">
            Building a convolutional neural network from scratch on Python using NumPy
          </div>
          <div className="modals-footer">
            <button className='btn btn-secondary mt-3' onClick={props.onClose}><span>&times;</span> Close Project</button>
          </div>
        </div>}

        {props.show ===6 && <div className="modals-content">
          <div className="modals-header">
            <h2>Multi-Layer Fully Connected Neural Network</h2>
          </div>
          <div className="modals-body">
            Project description coming soon!
          </div>
          <div className="modals-footer">
            <button className='btn btn-secondary mt-3' onClick={props.onClose}><span>&times;</span> Close Project</button>
          </div>
        </div>}

        {props.show ===7 && <div className="modals-content">
          <div className="modals-header">
            <h2>Two Layer Neural Network</h2>
          </div>
          <div className="modals-body">
            Project description coming soon!
          </div>
          <div className="modals-footer">
            <button className='btn btn-secondary mt-3' onClick={props.onClose}><span>&times;</span> Close Project</button>
          </div>
        </div>}

        {props.show ===8 && <div className="modals-content">
          <div className="modals-header">
            <h2>Object-Oriented League Tournament</h2>
          </div>
          <div className="modals-body">
            Project description coming soon!
          </div>
          <div className="modals-footer">
            <button className='btn btn-secondary mt-3' onClick={props.onClose}><span>&times;</span> Close Project</button>
          </div>
        </div>}

        {props.show ===9 && <div className="modals-content">
          <div className="modals-header">
            <h2>Library Checkout GUI</h2>
          </div>
          <div className="modals-body">
            Project description coming soon!
          </div>
          <div className="modals-footer">
            <button className='btn btn-secondary mt-3' onClick={props.onClose}><span>&times;</span> Close Project</button>
          </div>
        </div>}

        {props.show ===10 && <div className="modals-content">
          <div className="modals-header">
            <h2>Binary-Text Converter</h2>
          </div>
          <div className="modals-body">
            Project description coming soon!
          </div>
          <div className="modals-footer">
            <button className='btn btn-secondary mt-3' onClick={props.onClose}><span>&times;</span> Close Project</button>
          </div>
        </div>}
        

        

        



      </div>
    </React.Fragment>
  );
}

export default Modal;