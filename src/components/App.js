// import logo from './logo.svg';
// import './App.css';
import React , { useState } from 'react'
const App = () => {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState('hello')
  return (
    <>
      {message}:{count}
      <div>
        <button onClick={() => setCount((cnt) => ++cnt)}> + </button>
        <button onClick={() => setCount((cnt) => --cnt)}> - </button>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage((msg) => (msg = e.target.value))}
        />
      </div>
    </>
  );
}

export default App;
