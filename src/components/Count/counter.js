import React, { useState } from 'react';

const Counter = () => {
  const [up, setUp] = useState(0);

  const add = () => {
    setUp(up + 1);
  };

  const away = () => {
    setUp(up - 1);
  };

  const reset = () => {
    window.location.reload(false);
  };

  return (
    <div className='center'>
      <div className='center w-60 h-48 border-2 border-white mt-80'>
        <div className='border-2 border-white pl-4 pr-4'>{up}</div>
        <div>
          <button className='btn pl-3 pr-3 mr-4' onClick={add}>
            +
          </button>
          <button className=' btn pl-3.5 pr-3.5 mb-7' onClick={away}>
            -
          </button>
        </div>
        <button onClick={reset} className='border-2 border-white pl-3 pr-3'>
          Click here to reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
