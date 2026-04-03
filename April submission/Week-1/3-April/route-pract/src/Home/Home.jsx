import React from 'react'
import useCounter from '../hooks/useCounter'

const Home = () => {
  const [count, Incr,  Decr] = useCounter()

  return (
    <div className='text-center p-2'>
      This is a Custom Hook/Home Page.
      <div className="counter">
        <h2 className='mb-12'>This is the example of custom hook - useCounter</h2>
        <p>Counter: {count}</p>
        <button className='m-3 border border-black rounded p-2' onClick={Incr}>+</button>
        <button className='m-3 border border-black rounded p-2' onClick={Decr}>-</button>
      </div>
    </div>
  )
}

export default Home
