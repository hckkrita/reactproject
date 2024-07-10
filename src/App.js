import {useState} from 'react'
import './App.css';
import TimerComponent from './timer';
import ToggleParentComponent from './toggleParentComponent';
import CounterParentComponent from './counterParentComponent';
import MessageParentComponet from './messageParentComponent';

function App() {
  const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };
  return(
    <>
      <nav className="navbar">
            <div className="navbar-logo">
                YX.CO
            </div>
            <button className="navbar-toggle" onClick={toggleNavbar}>
                ☰
            </button>
            <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#contact">Contact</a>
            </div>
        </nav>

        <TimerComponent/>

        <ToggleParentComponent/>
        <CounterParentComponent/>
        <MessageParentComponet/>
    </>
  );
}

export default App;
