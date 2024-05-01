import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)


function countInc(){
  setCount(count + 1 );
  }

function countDec(){
  if (count === 0 ) return console.log("YOu Suck ") ;
  setCount(count - 1);

  return "";
}

  return (
    <>
      <h1>First App</h1>
      <div className="card">
        <button onClick={countInc}>
          count is {count}
        </button>
        <button onClick={countDec}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
