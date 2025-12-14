import React, { useContext } from 'react'
import Card from '../../Components/Card/Card'
import { Passingvalue } from '../../App'



const All = () => {
  const products = useContext(Passingvalue)
  return (
    <div className='All'>
      {products.map((item)=>(
        <Card {...item}/>
      ))}
    </div>
  )
}

export default All