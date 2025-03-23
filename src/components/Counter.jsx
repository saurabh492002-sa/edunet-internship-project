import React from 'react'
import { useState } from 'react'
function Counter() {
    const [count, setCount] = useState(0)
  return (
    <div>
        <h2>Count:{count}</h2>
        <button onClick={() => setCount(count + 1)}>+</button>
        <br/>
        <br/>
        <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  )
}

export default Counter
