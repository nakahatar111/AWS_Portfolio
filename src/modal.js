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
            <h2><a href='https://master.d1hhzdy6th1z7w.amplifyapp.com/' target={'_blank'} rel="noreferrer">TextNet</a> - Chat Application</h2>
          </div>
          <div className="modals-body">
            Project description coming soon!
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