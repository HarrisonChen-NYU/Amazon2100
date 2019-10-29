import React from 'react';
import './App.css';

let shoppingCartItems = [
  {
    item: 'War and Peace',
    image: 'https://images4.penguinrandomhouse.com/cover/9781400079988',
    description: 'War and Peace broadly focuses on Napoleon’s invasion of Russia in 1812 and follows three of the most well-known characters in literature',
    price: 100
  },

  {
    item: 'Egg',
    image: 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=2ahUKEwivxub-58HlAhVhyIsBHSQ-AgsQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.delish.com%2Fcooking%2Frecipe-ideas%2Frecipes%2Fa58284%2Fhow-to-make-perfect-hard-boiled-eggs%2F&psig=AOvVaw0S2S_PEtS5eVFEWbMDAQna&ust=1572450251261355',
    description: 'This is from a distant land where chickens are twice the size and twice as powerful as traditional birds',
    price: 5
  },

]




function App (){
  return (
    <div className="App">
      <h1>Your Shopping Cart</h1>
     <SearchForm />
     <ShoppingCart />
     <Product />
    </div>
  );
}

function ShoppingCart() {
  return(
    <div className="cart">
      <Product />
    </div>
  );
}


function Product() {
  return(
    <div className="product">
      <img src={shoppingCartItems[0].image} width="100"/>
    </div>
  )
}

function SearchForm() {
  return(
    <form>
      <label>
        Search:
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default App;