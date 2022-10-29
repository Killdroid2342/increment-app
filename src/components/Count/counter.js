import React, { useState } from 'react';

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
    <div className='center'>
      <div className='center w-52 h-40 border-2 border-white mt-80'>
        <div className=''>{up}</div>

        <button className='' onClick={add}>
          +
        </button>

        <button className='' onClick={away}>
          -
        </button>

        <button onClick={reset} className=''>
          Click here to reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
