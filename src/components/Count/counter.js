// import { Fragment } from 'react';

import React, { useState } from 'react';

import './counter.css';

const Counter = () => {
  const [up, setUp] = useState(0);

  const add = () => {
    // console.log("TEST");

    setUp(up + 1);
  };

  const away = () => {
    // console.log("test2");

    setUp(up - 1);
  };

  const reset = () => {
    window.location.reload(false);
  };

  return (
    <div className='out'>
      <div className='input'>{up}</div>

      <button className='increasese' onClick={add}>
        +
      </button>

      <button className='decreasese' onClick={away}>
        -
      </button>

      <button onClick={reset} className='reset'>
        Click here to reset
      </button>
    </div>
  );
};

export default Counter;
