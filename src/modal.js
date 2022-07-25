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
            <p className="modals-text">
              Chat Application hosted on AWS Amplify and its webserver on AWS EC2.
            </p>
            <img alt="textnet" src= '/projects/textnet.jpg'
              style={{maxWidth:'90%', height:'auto'}} className="d-inline-block align-top" />
            <p className="modals-text">
              Registered users for TextNet can execute real-time communication 
              with other users, access prior conversations, and create or delete 
              chats. Additionally, the program features notification systems, 
              appropriate time stamps, and message delivery statuses.
            </p>
            <img alt="textnet" src= '/projects/textnet.jpg'
              style={{maxWidth:'90%', height:'auto'}} className="d-inline-block align-top" />
            <p className="modals-text">
              TextNet is a group and one-to-one chat application that uses 
              React JS for the front-end user interface on AWS Amplify. 
              The application asynchronously fetches the appropriate JSON data 
              from the web server and displays the data on the user interface. 
              The backend web server that accepts requests via HTTPS is backed 
              by NodeJS and Express. The server runs on a virtual machine 
              provided by AWS EC2. The web server communicates with the MySQL 
              database on AWS RDS. A total of three tables are used to maintain 
              the communication service, and the purpose of the tables is 
              self-evident in their name. 
            </p>

            <p style={{fontSize:'17px', marginBlock:'0px'}}>View this project on GitHub:&nbsp;
              <a style={{fontWeight:'normal', color:'#fcbc1d', wordBreak:'break-word'}} 
              href='https://github.com/nakahatar111/AWS_react_chat' target={'_blank'} 
              rel="noreferrer">https://github.com/nakahatar111/AWS_react_chat</a>
            </p>
          </div>
          <div className="modals-footer">
            <button className='btn btn-secondary mt-3 p-2' onClick={props.onClose}><span>&times;</span> Close Project</button>
          </div>
        </div>}

        {props.show ===2 && <div className="modals-content">
          <div className="modals-header">
            <h2>Hitman - Browser Game</h2>
          </div>
          <div className="modals-body">
            <p className="modals-text">
              Registration Webpage that hosts a browser game built using a JS framework called Phaser3
            </p>
            <img alt="Hitman" src= '/projects/Hitman.jpg'
              style={{maxWidth:'90%', height:'auto'}}/>
            <p className="modals-text">
              I developed a website using Javascript, HTML, CSS and PHP, that 
              communicates with a MySQL database service on an Apache HTTP 
              server. The website allows users to register and log in with 
              valid inputs. Any sensitive data is properly hashed and salted 
              before being stored in the SQL database. 
            </p>
            <img alt="Hitman" src= '/projects/Hitman.jpg'
              style={{maxWidth:'90%', height:'auto'}}/>
            <p className="modals-text">
              Registered users can access an exclusive web game called Hitman. 
              The game is a top-down shooter game using a JS framework called 
              Phaser 3. Players must avoid incoming enemies while collecting 
              health packs and ammo. The randomly walking enemies will follow 
              the player depending on their proximity and shoot projectiles 
              toward the player. The game's objective is to defeat all the 
              enemies as fast as possible. 
            </p>
            <img alt="Hitman" src= '/projects/Hitman.jpg'
              style={{maxWidth:'90%', height:'auto'}}/>
            <p className="modals-text">
              Whenever a user improves their score for a particular stage, 
              the game updates the user data on the database. Using the 
              collection of high scores of every existing user data, I 
              created a leaderboard to see the rank of the performances 
              of every player.
            </p>
            <p style={{fontSize:'17px', marginBlock:'0px'}}>View this project on GitHub:&nbsp;
              <a style={{fontWeight:'normal', color:'#fcbc1d', wordBreak:'break-word'}} 
              href='https://github.com/nakahatar111/HitmanBrowerGame' target={'_blank'} 
              rel="noreferrer">https://github.com/nakahatar111/HitmanBrowerGame</a>
            </p>
          </div>
          <div className="modals-footer">
            <button className='btn btn-secondary mt-3 p-2' onClick={props.onClose}><span>&times;</span> Close Project</button>
          </div>
        </div>}

        {props.show ===3 && <div className="modals-content">
          <div className="modals-header">
            <h2>Network Visualization</h2>
          </div>
          <div className="modals-body">
            <p className="modals-text">
              Project description coming soon! <br/>
              Check out the github link in the meanwhile!
            </p>
            <p style={{fontSize:'17px', marginBlock:'0px'}}>View this project on GitHub:&nbsp;
              <a style={{fontWeight:'normal', color:'#fcbc1d', wordBreak:'break-word'}} 
              href='https://github.com/nakahatar111/' target={'_blank'} 
              rel="noreferrer">https://github.com/nakahatar111/</a>
            </p>
          </div>

          <div className="modals-footer">
            <button className='btn btn-secondary mt-3 p-2' onClick={props.onClose}><span>&times;</span> Close Project</button>
          </div>
        </div>}

        {props.show ===4 && <div className="modals-content">
          <div className="modals-header">
            <h2>Sentiment Text Analysis</h2>
          </div>
          <div className="modals-body">
            <p className="modals-text">
              Project description coming soon! <br/>
              Check out the github link in the meanwhile!
            </p>
            <p style={{fontSize:'17px', marginBlock:'0px'}}>View this project on GitHub:&nbsp;
              <a style={{fontWeight:'normal', color:'#fcbc1d', wordBreak:'break-word'}} 
              href='https://github.com/nakahatar111/TextAnalysis' target={'_blank'} 
              rel="noreferrer">https://github.com/nakahatar111/TextAnalysis</a>
            </p>
          </div>

          <div className="modals-footer">
            <button className='btn btn-secondary mt-3 p-2' onClick={props.onClose}><span>&times;</span> Close Project</button>
          </div>
        </div>}

        {props.show ===5 && <div className="modals-content">
          <div className="modals-header">
            <h2>Convolutional Neural Network</h2>
          </div>
          <div className="modals-body">
            <p className="modals-text">
              Building a convolutional neural network from scratch on Python using NumPy
            </p>
            <p className="modals-text">
              Project description coming soon! <br/>
              Check out the github link in the meanwhile!
            </p>
            <p style={{fontSize:'17px', marginBlock:'0px'}}>View this project on GitHub:&nbsp;
              <a style={{fontWeight:'normal', color:'#fcbc1d', wordBreak:'break-word'}} 
              href='https://github.com/nakahatar111/ConvolutionalNeuralNetwork' target={'_blank'} 
              rel="noreferrer">https://github.com/nakahatar111/ConvolutionalNeuralNetwork</a>
            </p>
          </div>

          <div className="modals-footer">
            <button className='btn btn-secondary mt-3 p-2' onClick={props.onClose}><span>&times;</span> Close Project</button>
          </div>
        </div>}

        {props.show ===6 && <div className="modals-content">
          <div className="modals-header">
            <h2>Multi-Layer Fully Connected Neural Network</h2>
          </div>
          <div className="modals-body">
          <p className="modals-text">
              Project description coming soon! <br/>
              Check out the github link in the meanwhile!
            </p>
            <p style={{fontSize:'17px', marginBlock:'0px'}}>View this project on GitHub:&nbsp;
              <a style={{fontWeight:'normal', color:'#fcbc1d', wordBreak:'break-word'}} 
              href='https://github.com/nakahatar111/' target={'_blank'} 
              rel="noreferrer">https://github.com/nakahatar111/</a>
            </p>
          </div>

          <div className="modals-footer">
            <button className='btn btn-secondary mt-3 p-2' onClick={props.onClose}><span>&times;</span> Close Project</button>
          </div>
        </div>}

        {props.show ===7 && <div className="modals-content">
          <div className="modals-header">
            <h2>Two Layer Neural Network</h2>
          </div>
          <div className="modals-body">
          <p className="modals-text">
              Project description coming soon! <br/>
              Check out the github link in the meanwhile!
            </p>
            <p style={{fontSize:'17px', marginBlock:'0px'}}>View this project on GitHub:&nbsp;
              <a style={{fontWeight:'normal', color:'#fcbc1d', wordBreak:'break-word'}} 
              href='https://github.com/nakahatar111/TwoLayerNet' target={'_blank'} 
              rel="noreferrer">https://github.com/nakahatar111/TwoLayerNet</a>
            </p>
          </div>

          <div className="modals-footer">
            <button className='btn btn-secondary mt-3 p-2' onClick={props.onClose}><span>&times;</span> Close Project</button>
          </div>
        </div>}

        {props.show ===8 && <div className="modals-content">
          <div className="modals-header">
            <h2>Object-Oriented League Tournament</h2>
          </div>
          <div className="modals-body">
          <p className="modals-text">
              Project description coming soon! <br/>
              Check out the github link in the meanwhile!
            </p>
            <p style={{fontSize:'17px', marginBlock:'0px'}}>View this project on GitHub:&nbsp;
              <a style={{fontWeight:'normal', color:'#fcbc1d', wordBreak:'break-word'}} 
              href='https://github.com/nakahatar111/LeagueOOP' target={'_blank'} 
              rel="noreferrer">https://github.com/nakahatar111/LeagueOOP</a>
            </p>
          </div>

          <div className="modals-footer">
            <button className='btn btn-secondary mt-3 p-2' onClick={props.onClose}><span>&times;</span> Close Project</button>
          </div>
        </div>}

        {props.show ===9 && <div className="modals-content">
          <div className="modals-header">
            <h2>Library Checkout GUI</h2>
          </div>
          <div className="modals-body">
          <p className="modals-text">
              Project description coming soon! <br/>
              Check out the github link in the meanwhile!
            </p>
            <p style={{fontSize:'17px', marginBlock:'0px'}}>View this project on GitHub:&nbsp;
              <a style={{fontWeight:'normal', color:'#fcbc1d', wordBreak:'break-word'}} 
              href='https://github.com/nakahatar111/LibraryGUI' target={'_blank'} 
              rel="noreferrer">https://github.com/nakahatar111/LibraryGUI</a>
            </p>
          </div>

          <div className="modals-footer">
            <button className='btn btn-secondary mt-3 p-2' onClick={props.onClose}><span>&times;</span> Close Project</button>
          </div>
        </div>}

        {props.show ===10 && <div className="modals-content">
          <div className="modals-header">
            <h2>Binary-Text Converter</h2>
          </div>
          <div className="modals-body">
          <p className="modals-text">
              Project description coming soon! <br/>
              Check out the github link in the meanwhile!
            </p>
            <p style={{fontSize:'17px', marginBlock:'0px'}}>View this project on GitHub:&nbsp;
              <a style={{fontWeight:'normal', color:'#fcbc1d', wordBreak:'break-word'}} 
              href='https://github.com/nakahatar111/BinaryTextConverter' target={'_blank'} 
              rel="noreferrer">https://github.com/nakahatar111/BinaryTextConverter</a>
            </p>
          </div>

          <div className="modals-footer">
            <button className='btn btn-secondary mt-3 p-2' onClick={props.onClose}><span>&times;</span> Close Project</button>
          </div>
        </div>}
        
      </div>
    </React.Fragment>
  );
}

export default Modal;