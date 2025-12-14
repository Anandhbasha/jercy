import React, { createContext } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import All from './Pages/All/All'
import Mens from './Pages/Mens/Mens'
import Womens from './Pages/Womens/Womens'
import mshirts from './assets/Images/shirtmens.jpg'
import mTshirts from './assets/Images/Tshirts.jpg'
import wtshirts from './assets/Images/wtshirt.jpg'
import wshirts from './assets/Images/download.jpg'


export const Passingvalue = createContext()
const products = [
  {
    Image:mshirts,
    prodCat:"Mens",
    prodName:"New Shirt",
    ProdPrice:500,
    ProdDesc:"kjhgughjbnkjnkjghg"
  },
  {
    Image:mTshirts,
    prodCat:"Mens",
    prodName:"New Shirt",
    ProdPrice:500,
    ProdDesc:"kjhgughjbnkjnkjghg"
  },
  {
    Image:wtshirts,
    prodCat:"Womens",
    prodName:"Womens New Shirt",
    ProdPrice:500,
    ProdDesc:"kjhgughjbnkjnkjghg"
  },
  {
    Image:wshirts,
    prodCat:"Womens",
    prodName:"Womens T Shirt",
    ProdPrice:500,
    ProdDesc:"kjhgughjbnkjnkjghg"
  },
]
const App = () => {
  return (
    <BrowserRouter>
      <Passingvalue.Provider value={products}>
        <div className='App'>
          <Navbar/>
        </div>
        <Routes>
          <Route path='/' element={<All/>}/>
          <Route path='/mens' element={<Mens/>}/>
          <Route path='/womens' element={<Womens/>}/>
        </Routes>
      </Passingvalue.Provider>
    </BrowserRouter>
  )
}

export default App