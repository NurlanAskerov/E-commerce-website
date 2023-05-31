import { useState } from "react"
import Products from "./components/Products"
import Card from "./components/Card"
import CardContext from "./useContext/CardContext"

function App() {
  const [cardItems,setCardItems]=useState([])
  const [total,setTotal]=useState(0)
  const value={
    cardItems,setCardItems,total,setTotal
  }
  return (
    <CardContext.Provider value={value}>
    <div>
     <Card/>
     <hr className="text-bold"/>
     <Products/>
    </div>
    </CardContext.Provider>
  )
}

export default App
