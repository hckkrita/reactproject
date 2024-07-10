import React from 'react';
import './timer.css';


const ToggleChildComponent = ({ isOn, toggleSwitch }) => {
  return (
    <div>
      <h1>The switch is {isOn ? 'ON' : 'OFF'}</h1>
      <button  className="childButton" onClick={toggleSwitch}>
        {isOn ? 'Child Turn OFF' : 'Child Turn ON'}
      </button>
    </div>
  );
};

export default ToggleChildComponent;
