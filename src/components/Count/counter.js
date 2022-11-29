import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [up, setUp] = useState(0);

  useEffect(() => {
    document.title = `Your Current Number Is ${up}`;
  }, [up]);

  const addOne = () => {
    setUp(up + 1);
  };
  const addFive = () => {
    setUp(up + 5);
  };
  const addTen = () => {
    setUp(up + 10);
  };
  const awayOne = () => {
    setUp(up - 1);
  };
  const awayFive = () => {
    setUp(up + 5);
  };
  const awayTen = () => {
    setUp(up - 10);
  };
  const reset = () => {
    setUp(0);
  };

  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className='text-3xl mt-52 font-bold'>You are on {up}</h1>
      <div className='flex flex-col items-center justify-center p-10 h-48 border-2 border-white mt-20 rounded-2xl'>
        <div>
          <button
            className='border-2 border-white pt-1 pb-1 mt-3 pl-3 pr-3 mr-4 font-bold rounded-2xl'
            onClick={addTen}
          >
            + 10
          </button>
          <button
            className='border-2 border-white pt-1 pb-1 mt-3 pl-3 pr-3 mr-4 font-bold rounded-2xl'
            onClick={addOne}
          >
            + 1
          </button>
          <button
            className='border-2 border-white pt-1 pb-1 mt-3 pl-3.5 pr-3 mb-7 mr-4 font-bold rounded-2xl'
            onClick={addFive}
          >
            + 5
          </button>
          <button
            className='border-2 border-white pt-1 pb-1 mt-3 pl-3.5 pr-3 mb-7 mr-4 font-bold rounded-2xl'
            onClick={awayOne}
          >
            - 1
          </button>
          <button
            className='border-2 border-white pt-1 pb-1 mt-3 pl-3.5 pr-3 mb-7 mr-4 font-bold rounded-2xl'
            onClick={awayFive}
          >
            - 5
          </button>
          <button
            className='border-2 border-white pt-1 pb-1 mt-3 pl-3.5 pr-3 mb-7 font-bold rounded-2xl'
            onClick={awayTen}
          >
            - 10
          </button>
        </div>
        <button
          onClick={reset}
          className='border-2 border-white p-2 font-bold rounded-md'
        >
          Click here to reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
