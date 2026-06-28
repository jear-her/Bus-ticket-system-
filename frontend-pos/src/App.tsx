import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>{count}</h1>
    <button className="text-red-500 bg-blue-500 px-2 py-2 rounded-lg" onClick={() => setCount(count + 1)}>Increase</button>
    </>
   
  )
}

export default App
