import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {
  let [count,setCount]  =useState(0)
  let [datas,setDatas] = useState([])
  const [drop,setDrop] = useState(10)
  useEffect(()=>{
    const fetchData = async()=>{
      try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
        if(!res){
          throw Error ("Unable to connect API")
        }
        console.log(res.data);
        
        const newData = await res.data
        setDatas(newData)
        console.log(newData);
        
      } catch (error) {
        console.log(error);
        
      }
    }
    fetchData()
    
  },[]) 
  console.log(datas);
  
const headValue = datas.length > 0 ? Object.keys(datas[0]) : [];


const handleAdd = ()=>{
  setCount(++count)
}

const handleDrop = (e)=>{
setDrop(e.target.value)
}

const dropDownValues = [10,20,30,40,50]
  return (  
    <div className="App" style={{marginLeft:"200px"}}>
    <select onChange={handleDrop}>
      {dropDownValues.map((item)=>(
        <option>{item}</option>
      )
    )}
    </select>
     <table border={1}>
      <thead>
        {headValue.map((item)=>(
          <th>{item}</th>
        ))}
      </thead>
      <tbody>
        {Object.values(datas).slice(0,drop).map((item)=>(
          <tr>
            <td>{item.userId}</td>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.body}</td>
          </tr>
          ))}
      </tbody>
    </table>
  </div>
  )
}

export default App