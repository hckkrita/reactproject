import React, { useState } from 'react';
import ToggleChildComponent from './toggleChildComponent';
import './timer.css';

const ToggleParentComponent = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(prevState => !prevState);
  };

  return (
    <div className='togglecontainer'>
      <ToggleChildComponent isOn={isOn} toggleSwitch={toggleSwitch}/>
      <button onClick={toggleSwitch}>
        {isOn ? 'Turn OFF' : 'Turn ON'}
      </button>
    </div>
  );
};

export default ToggleParentComponent;
