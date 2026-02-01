import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './Slice/Slice'

const App = () => {
  const dispatch = useDispatch()
  const counts = useSelector((state)=>state.counting.count)
  return (
    <div className='App'>
      <p>{counts}</p>
      <button onClick={()=>dispatch(increment(1))}>Increment</button>
      <button onClick={()=>dispatch(decrement(1))}>Decrement</button>
    </div>
  )
}

export default App