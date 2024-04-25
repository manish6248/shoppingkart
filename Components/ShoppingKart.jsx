import React from 'react'
import Card from './Card'

function ShoppingKart() {
  return (
    
    <div id="wrapper">
    <h1>
      <div className="cart-icon-bottom"></div>
      <div id="sidebar">
        <h3>CART</h3>
        <div id="cart">
          <h5 className="empty">No items in cart.</h5>
        </div>
      </div>
    </h1>
    <div id="grid"></div>
    
      <Card
      imgsrc="src/assets/image/black.jpg"
      imgalt="Black shirt"
      title="black shirt"
      price= "₹400"
      />

      <Card
      imgsrc="src/assets/image/cream.jpg"
      imgalt="Cream shirt"
      title="Cream Shirt"
      price= "₹350"
      />
      
      <Card
      imgsrc="src/assets/image/white.jpg"
      imgalt="White shirt"
      title="White Shirt"
      price= "₹450"
      />
      
    </div>
  )
}

export default ShoppingKart
