import React from 'react'

const Card = ({Image,prodName,ProdPrice,ProdDesc}) => {
  return (
    <div className='Card'>
        <div className='cardTop'>
            <img src={Image}></img>
        </div>
        <div className='cardBottom'>
            <h3>{prodName}</h3>
            <h3>{ProdPrice}</h3>
            <h3>{ProdDesc}</h3>
        </div>
        <button>Add to Cart</button>
    </div>
  )
}

export default Card