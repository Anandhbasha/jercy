import React, { useContext } from 'react'
import Card from '../../Components/Card/Card'
import { Passingvalue } from '../../App'

const Mens = () => {
  const products = useContext(Passingvalue)
  const mensProd = products.filter((x)=>x.prodCat==="Mens")
  return (
    <div className='Mens'>
      {mensProd.map((item)=>(
        <Card {...item}/>
      ))}
    </div>
  )
}

export default Mens