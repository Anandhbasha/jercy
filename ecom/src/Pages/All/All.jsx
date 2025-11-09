import React from 'react'
import Card from '../../Components/Card/Card'
import img1 from '../../assets/Images/nature.jpg'

const products = [
  {
    Image:img1,
    prodName:"New Shirt",
    ProdPrice:500,
    ProdDesc:"kjhgughjbnkjnkjghg"
  },
  {
    Image:img1,
    prodName:"New Shirt",
    ProdPrice:500,
    ProdDesc:"kjhgughjbnkjnkjghg"
  },
  {
    Image:img1,
    prodName:"New Shirt",
    ProdPrice:500,
    ProdDesc:"kjhgughjbnkjnkjghg"
  }
]

const All = () => {
  return (
    <div className='All'>
      {products.map((item)=>(
        <Card {...item}/>
      ))}
    </div>
  )
}

export default All