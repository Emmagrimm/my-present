import React, {useState} from 'react';
import present from './present1.png';
import './App.css';
import Modal from './Modal.js';
import ReactDOM from 'react-dom';



function App() {

  const[show, setShow]=useState(false);  //initilasing the array with two properties: show and setShow, setShow is the function that is useed to update state
  const openModal = () => setShow(true); //creating function that takes value of true
  const closeModal = () => setShow(false);

  return (
    <div className="App">
      <header className="App-header">
        {!show &&  <img src={present} className ='present' onClick={openModal}/>}
        <Modal closeModal={closeModal} show={show} />
          <p className='my-text-style'>
            Нажми чтобы получить свой подарок
          </p>
      </header>
    </div>
  );
}


export default App;
