import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [up, setUp] = useState(0);

  useEffect(() => {
    document.title = `On this tab, you are on ${up}`;
  }, [up]);

  const add = () => {
    setUp(up + 1);
  };

  const away = () => {
    setUp(up - 1);
  };

  const reset = () => {
    setUp(0);
  };

  return (
    <div className='center'>
      <h1 className='text-3xl mt-52'>You are on {up}</h1>
      <div className='center w-60 h-48 border-2 border-white mt-20'>
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
